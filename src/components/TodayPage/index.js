import Footer from "../Footer";
import Header from "../Header/Header";
import { Container, Progress } from "./style";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../Contexts/userContext";
import { getTodayHabits } from "../../services/trackit";
import dayjs from "dayjs";

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
        const promise = getTodayHabits(config)
        promise.then(response => sethabits(response.data))
    },[])

  return (
    <>
      <Header />
      <Container>
          <p>{weekDays[dayjs().day()]}, {dayjs().date() < 10 ? `0${dayjs().date()}` : dayjs().date()}/{(dayjs().month() + 1) < 10 ? `0${(dayjs().month() + 1)}` : (dayjs().month() + 1)}</p>
          <Progress progress={progress}>{progress > 0 ? `${progress}% dos hábitos concluídos` : 'Nenhum hábito concluído ainda'}</Progress>
      </Container>
      <Footer />
    </>
  );
}
