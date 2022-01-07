import { useState } from "react";
import Footer from "../Footer";
import Header from "../Header/Header";
import { Container, MyHabits, TaskCreation, DaySelector, DayBox, ButtonBox } from "./style";
export default function HabitsPage() {
  const [createTask, setCreateTask] = useState(false);
  const [weekDays, setWeekDays] = useState([
    { day: "D", selected: false },
    { day: "S", selected: false },
    { day: "T", selected: false },
    { day: "Q", selected: false },
    { day: "Q", selected: false },
    { day: "S", selected: false },
    { day: "S", selected: false },
  ]);


  function handleSelectDay(selectedDay){
    const day = weekDays.find(currentDay => selectedDay === currentDay)
    day.selected = !day.selected
    setWeekDays([...weekDays])
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
            <form>
              <input type="text" placeholder="nome do hábito" />
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
                <button onClick={() => setCreateTask(false)}>Cancelar</button>
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
