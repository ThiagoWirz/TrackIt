import { Container } from "./style";
import { useContext } from "react";
import UserContext from "../../Contexts/userContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate()

  function logOut(){
    if(window.confirm("Gostaria de sair deste usuário?")){
      localStorage.clear();
      setUser(null)
      navigate("/")
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
