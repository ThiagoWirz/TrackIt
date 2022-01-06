import logo from "../../assets/img/logo.png";
import { Container, Button } from "./style";
import { Link } from "react-router-dom";
import { useState } from "react";
import { logIn } from "../../services/trackit";
export default function LoginPage({ setUser }) {
  const [formData, setFormData] = useState({ email: "", password: "" });

  function handleInputChange(e) {
    formData[e.target.name] = e.target.value;
    setFormData({ ...formData });
  }

  function handleLogIn(e){
    e.preventDefault();
    const promise = logIn(formData);
    promise.then(response => console.log(response.data))
    promise.catch(error => console.log(error.response.data))

  }


  return (
    <Container>
      <img src={logo} alt="TrackIt" />
      <form onSubmit={handleLogIn}>
      <input
          value={formData.email}
          type="email"
          placeholder="email"
          name="email"
          onChange={handleInputChange}
        />
        <input
          value={formData.password}
          type="password"
          placeholder="senha"
          name="password"
          onChange={handleInputChange}
        />
        <Button>Entrar</Button>
      </form>
      <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
    </Container>
  );
}
