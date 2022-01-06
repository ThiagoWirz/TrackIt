import logo from "../../assets/img/logo.png";
import { Container, Button } from "./style";
import { Link } from "react-router-dom";
export default function LoginPage() {
  return (
    <Container>
      <img src={logo} alt="TrackIt" />
      <form>
      <input type="email" placeholder="email" />
      <input type="password" placeholder="senha" />
      <Button>Entrar</Button>
      </form>
      <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
    </Container>
  );
}
