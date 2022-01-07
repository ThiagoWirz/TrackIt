import Footer from "../Footer";
import Header from "../Header/Header";
import { Container } from "./style";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../Contexts/userContext";
import { getTodayHabits } from "../../services/trackit";

export default function TodayPage() {
    const {user} = useContext(UserContext)
    const [habits, sethabits] = useState(null)
    const config = {headers: {Authorization: `Bearer ${user.token}`}}
    console.log(habits)

    useEffect(() =>{
        const promise = getTodayHabits(config)
        promise.then(response => sethabits(response.data))
    },[])

  return (
    <>
      <Header />
      <Container>

      </Container>
      <Footer />
    </>
  );
}
