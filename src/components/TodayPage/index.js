import Footer from "../Footer";
import Header from "../Header/Header";
import { Container, Progress, Habit, CheckBox, LoadingScreen } from "./style";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../Contexts/userContext";
import { getTodayHabits, markHabit } from "../../services/trackit";
import dayjs from "dayjs";
import checkmark from "../../assets/img/Vector.png";
import Loader from "react-loader-spinner";

export default function TodayPage() {
  const { user, progress, setProgress } = useContext(UserContext);
  const [habits, sethabits] = useState(null);
  const config = { headers: { Authorization: `Bearer ${user.token}` } };
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  useEffect(() => {
    renderHabits();
  }, []);

  function renderHabits() {
    const promise = getTodayHabits(config);
    promise.then((response) => {
      sethabits(response.data);
      setProgress(() => calcProgress(response.data));
    });
  }

  function calcProgress(habitList) {
    let counter = 0;
    for (let i = 0; i < habitList.length; i++) {
      if (habitList[i].done) {
        counter++;
      }
    }
    const percent = ((counter * 100) / habitList.length).toFixed();
    return percent;
  }

  function handleMarkHabit(id, done) {
    const promise = markHabit(id, done, config);
    promise.then(renderHabits);
    promise.catch((error) => alert(error.response.data.message));
  }

  if (habits === null) {
    return (<LoadingScreen>
    <Loader type="TailSpin"
    color="#000000"
    timeout={3000}>
    </Loader> Carregando
    </LoadingScreen>);
  }

  return (
    <>
      <Header />
      <Container>
        <p className="title">
          {weekDays[dayjs().day()]},{" "}
          {dayjs().date() < 10 ? `0${dayjs().date()}` : dayjs().date()}/
          {dayjs().month() + 1 < 10
            ? `0${dayjs().month() + 1}`
            : dayjs().month() + 1}
        </p>
        <Progress progress={progress}>
          {progress > 0
            ? `${progress}% dos hábitos concluídos`
            : "Nenhum hábito concluído ainda"}
        </Progress>
      <div className="margin">      
        {habits.map((habit) => {
          return (
            <Habit key={habit.id}>
              <div>
                <p className="habit-name">{habit.name}</p>
                <div className="habit-sequence">
                  <p>
                    Sequência atual:{" "}
                    <span className={habit.done ? "record" : ""}>
                      {habit.currentSequence} {habit.currentSequence === 1 ? "dia" : "dias" }
                    </span>
                  </p>
                  <p>
                    Seu recorde:{" "}
                    <span
                      className={
                        habit.currentSequence === habit.highestSequence &&
                        habit.done
                          ? "record" : ""
                      }
                    >
                      {habit.highestSequence} {habit.highestSequence === 1 ? "dia" : "dias"}
                    </span>
                  </p>
                </div>
              </div>
              <CheckBox
                onClick={() => handleMarkHabit(habit.id, habit.done)}
                check={habit.done}
              >
                <img src={checkmark} alt="" />
              </CheckBox>
            </Habit>
          );
        })}
        </div>
      </Container>
      <Footer />
    </>
  );
}
