import Footer from "../Footer";
import Header from "../Header/Header";
import { Container, Progress, Habit, CheckBox } from "./style";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../Contexts/userContext";
import { getTodayHabits, markHabit } from "../../services/trackit";
import dayjs from "dayjs";
import checkmark from "../../assets/img/Vector.png"

export default function TodayPage() {
    const {user, progress, setProgress} = useContext(UserContext)
    const [habits, sethabits] = useState(null)
    const config = {headers: {Authorization: `Bearer ${user.token}`}}
    const weekDays = [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado'
  ]
    console.log(habits)

    useEffect(() =>{
        renderHabits();
    },[])

    function renderHabits(){
      const promise = getTodayHabits(config)
        promise.then(response => {sethabits(response.data)
        setProgress(() => calcProgress(response.data))})
    }

    function calcProgress(habitList){
      let counter = 0;
      for (let i = 0; i < habitList.length; i++) {
          if (habitList[i].done) {
              counter++;
          }
      }
      const percent = ((counter * 100) / habitList.length).toFixed();
      return percent;
    }

    function handleMarkHabit(id, done){
      const promise = markHabit(id, done, config)
      promise.then(renderHabits)
      promise.catch(error => console.log(error.response.data.message))
    }

    if(habits === null){
      return <></>
    }

  return (
    <>
      <Header />
      <Container>
          <p className="title">{weekDays[dayjs().day()]}, {dayjs().date() < 10 ? `0${dayjs().date()}` : dayjs().date()}/{(dayjs().month() + 1) < 10 ? `0${(dayjs().month() + 1)}` : (dayjs().month() + 1)}</p>
          <Progress progress={progress}>{progress > 0 ? `${progress}% dos hábitos concluídos` : 'Nenhum hábito concluído ainda'}</Progress>
        
          {habits.map(habit =>{return(<Habit key={habit.id} >
                                <div>
                                    <p className="habit-name">{habit.name}</p>
                                    <div className="habit-sequence">
                                        <p>Sequência atual: <span
                                            className={habit.done ? 'record' : ''}>
                                            {habit.currentSequence} dias
                                        </span>
                                        </p>
                                        <p>Seu recorde: <span
                                            className={(habit.currentSequence === habit.highestSequence) &&
                                                habit.done ? 'record' : ''}>
                                            {habit.highestSequence} dias
                                        </span>
                                        </p>
                                    </div>
                                </div>
                                <CheckBox onClick={() => handleMarkHabit(habit.id, habit.done)} check={habit.done}><img src={checkmark} alt="" /></CheckBox>
                            </Habit>)})}
                        
      </Container>
      <Footer />
    </>
  );
}
