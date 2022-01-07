import Footer from "../Footer";
import Header from "../Header/Header";
import { Container } from "./style";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../Contexts/userContext";
import { getTask } from "../../services/trackit";

export default function TodayPage() {
    const {user} = useContext(UserContext)
    const [tasks, setTasks] = useState(null)
    const config = {headers: {Authorization: `Bearer ${user.token}`}}
    console.log(tasks)

    useEffect(() =>{
        const promise = getTask(config)
        promise.then(response => setTasks(response.data))
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
