import { Container, Button } from "../LoginPage/style";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

export default function SignInPage() {
  return (
    <Container>
      <img src={logo} alt="TrackIt" />
      <input type="email" placeholder="email" />
      <input type="password" placeholder="senha" />
      <input type="text" placeholder="nome" />
      <input type="text" placeholder="foto" />
      <Button>Cadastrar</Button>
      <Link to="/">Já tem uma conta? Faça login!</Link>
    </Container>
  );
}
