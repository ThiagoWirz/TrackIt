import { useState, useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header/Header";
import {
  Container,
  MyHabits,
  TaskCreation,
  DaySelector,
  DayBox,
  ButtonBox,
  Habit
} from "./style";
import { useContext } from "react";
import UserContext from "../../Contexts/userContext";
import { createHabit, deleteHabit, getTask } from "../../services/trackit";
import Loader from "react-loader-spinner";

export default function HabitsPage() {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [createTask, setCreateTask] = useState(false);
  const [weekDays, setWeekDays] = useState([
    { day: "D", selected: false, index: 0 },
    { day: "S", selected: false, index: 1 },
    { day: "T", selected: false, index: 2 },
    { day: "Q", selected: false, index: 3 },
    { day: "Q", selected: false, index: 4 },
    { day: "S", selected: false, index: 5 },
    { day: "S", selected: false, index: 6 },
  ]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [taskName, setTaskName] = useState("");
  const { user } = useContext(UserContext);
  const config = { headers: { Authorization: `Bearer ${user.token}` } };

  useEffect(() => {
    renderHabits();
}, []);

  function renderHabits(){
    const promise = getTask(config)
      promise.then(response => setHabits(response.data))
  }

  function handleSelectDay(selectedDay) {
    const day = weekDays.find((currentDay) => selectedDay === currentDay);
    day.selected = !day.selected;
    if (!selectedDays.includes(selectedDay.index)) {
      setSelectedDays([...selectedDays, selectedDay.index]);
    } else {
      setSelectedDays(selectedDays.filter((i) => i !== selectedDay.index));
    }
    setWeekDays([...weekDays]);
  }

  function resetTaksCreation() {
    setTaskName("");
    setSelectedDays([]);
    setWeekDays([
      { day: "D", selected: false, index: 0 },
      { day: "S", selected: false, index: 1 },
      { day: "T", selected: false, index: 2 },
      { day: "Q", selected: false, index: 3 },
      { day: "Q", selected: false, index: 4 },
      { day: "S", selected: false, index: 5 },
      { day: "S", selected: false, index: 6 },
    ]);
    setCreateTask(false);
  }

  function handleCreateHabit(e) {
    e.preventDefault();
    setLoading(true);
    const data = { name: taskName, days: selectedDays };
    const promise = createHabit(data, config);
    promise.then((response) => {
      resetTaksCreation()
      renderHabits();
      console.log(response.data);
      setLoading(false);
    });
    promise.catch((error) => {alert(error.response.data.message)
    setLoading(false)});
  }

  function handleDeleteHabit(id){
    if(window.confirm("Gostaria realmente de deletar esse hábito?")){
      const promise = deleteHabit(id, config)
      promise.then(() => renderHabits())
      promise.catch(error => console.log(error.response.data))
    }
  }

  console.log(habits)

  return (
    <>
      <Header />
      <Container>
        <MyHabits>
          <h1>Meus hábitos</h1>
          <div onClick={() => setCreateTask(true)}>+</div>
        </MyHabits>
        {createTask && (
          <TaskCreation>
            <form onSubmit={handleCreateHabit}>
              <input
                disabled={loading}
                type="text"
                placeholder="nome do hábito"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
              <DaySelector>
                {weekDays.map((day, index) => (
                  <DayBox
                    key={index}
                    selected={day.selected}
                    type="button"
                    disabled={loading}
                    onClick={() => handleSelectDay(day)}
                  >
                    {day.day}
                  </DayBox>
                ))}
              </DaySelector>
              <ButtonBox>
                <button
                  disabled={loading}
                  type="button"
                  onClick={() => setCreateTask(false)}
                >
                  Cancelar
                </button>
                <button disabled={loading}>
                  {loading ? (
                    <Loader
                      type="ThreeDots"
                      color="#FFFFFF"
                      height={13}
                      width={51}
                      timeout={3000}
                    />
                  ) : (
                    "Salvar"
                  )}
                </button>
              </ButtonBox>
            </form>
          </TaskCreation>
        )}
        {habits.length===0 ? <span>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </span> : habits.map(habit => <Habit key={habit.id}>
                            <p>{habit.name}</p>
                            <ion-icon onClick={() => handleDeleteHabit(habit.id)} name="trash-outline"></ion-icon>
                            <DaySelector>
                                {weekDays.map((day, index) =>
                                    <DayBox
                                        key={index}
                                        selected={habit.days.includes(index) ? true : false}>
                                        {day.day}
                                    </DayBox>
                                )}
                            </DaySelector>
                        </Habit>)}
        
      </Container>
      <Footer />
    </>
  );
}
