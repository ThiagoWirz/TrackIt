import { useState } from "react";
import Footer from "../Footer";
import Header from "../Header/Header";
import { Container, MyHabits, TaskCreation, DaySelector, DayBox, ButtonBox } from "./style";
import { useContext } from "react";
import UserContext from "../../Contexts/userContext";
import { createHabit } from "../../services/trackit";

export default function HabitsPage() {
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
  const [selectedDays, setSelectedDays] = useState([])
  const [taskName, setTaskName] = useState("")
  const {user} = useContext(UserContext)
  const config = {headers: {Authorization: `Bearer ${user.token}`}}


  function handleSelectDay(selectedDay){
    const day = weekDays.find(currentDay => selectedDay === currentDay)
    day.selected = !day.selected
    if(!selectedDays.includes(selectedDay.index)){
      setSelectedDays([...selectedDays, selectedDay.index])
    } else{
      setSelectedDays(selectedDays.filter((i) => i !== selectedDay.index))
    }
    setWeekDays([...weekDays])
  }

  function resetTaksCreation(){
    setTaskName("")
    setSelectedDays([])
    setWeekDays([
      { day: "D", selected: false, index: 0 },
      { day: "S", selected: false, index: 1 },
      { day: "T", selected: false, index: 2 },
      { day: "Q", selected: false, index: 3 },
      { day: "Q", selected: false, index: 4 },
      { day: "S", selected: false, index: 5 },
      { day: "S", selected: false, index: 6 },
    ])
    setCreateTask(false)
  }

  function handleCreateHabit(e){
    e.preventDefault();
    const data = {name: taskName, days: selectedDays}
    const promise = createHabit(data, config)
    promise.then(response => console.log(response.data))
    promise.catch(error => console.log(error.response.data))

  }

  return (
    <>
      <Header />
      <Container>
        <MyHabits>
          <span>Meus hábitos</span>
          <div onClick={() => setCreateTask(true)}>+</div>
        </MyHabits>
        {createTask && (
          <TaskCreation>
            <form onSubmit={handleCreateHabit}>
              <input type="text" placeholder="nome do hábito" value= {taskName} onChange={(e) => setTaskName(e.target.value)} />
              <DaySelector>
                {weekDays.map((day, index) => (
                  <DayBox
                    key={index}
                    selected={day.selected}
                    onClick={() => handleSelectDay(day)}>
                    {day.day}
                  </DayBox>
                ))}
              </DaySelector>
              <ButtonBox>
                <button type= "button" onClick={resetTaksCreation}>Cancelar</button>
                <button>Salvar</button>
              </ButtonBox>
            </form>
          </TaskCreation>
        )}
        <span>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </span>
      </Container>
      <Footer />
    </>
  );
}
