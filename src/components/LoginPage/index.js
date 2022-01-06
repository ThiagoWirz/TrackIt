import logo from "../../assets/img/logo.png";
import { Container, Button } from "./style";
import { Link } from "react-router-dom";
import { useState } from "react";
import { logIn } from "../../services/trackit";
import Loader from "react-loader-spinner";
export default function LoginPage({ setUser }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  function handleInputChange(e) {
    formData[e.target.name] = e.target.value;
    setFormData({ ...formData });
  }

  function handleLogIn(e){
    e.preventDefault();
    setLoading(true)
    const promise = logIn(formData);
    promise.then(response => {console.log(response.data)
    setLoading(false)})
    promise.catch(error => {alert(error.response.data.message)
    setLoading(false)})

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
          disabled={loading}
        />
        <input
          value={formData.password}
          type="password"
          placeholder="senha"
          name="password"
          onChange={handleInputChange}
          disabled={loading}
        />
        <Button disabled={loading}>
          {loading ? (
            <Loader
              type="ThreeDots"
              color="#FFFFFF"
              height={13}
              width={51}
              timeout={3000}
            />
          ) : (
            "Cadastrar"
          )}</Button>
      </form>
      <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
    </Container>
  );
}
