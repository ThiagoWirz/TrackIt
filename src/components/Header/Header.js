import { Container } from "./style";
import { useContext } from "react";
import UserContext from "../../Contexts/userContext";
import {IoLogOutOutline} from "react-icons/io5"

export default function Header() {
  const { user, setUser } = useContext(UserContext);

  function logOut(){
    if(window.confirm("Gostaria de sair deste usuário?")){
      localStorage.clear();
      window.location.reload();
    }
  }

  return (
    <Container>
      <ion-icon onClick={logOut} name="log-out-outline"></ion-icon>
      <h1>TrackIt</h1>
      <img src={user.image} alt="user" />
    </Container>
  );
}
