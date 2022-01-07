import logo from "../../assets/img/logo.png";
import { Container, Button } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { logIn } from "../../services/trackit";
import Loader from "react-loader-spinner";
import UserContext from "../../Contexts/userContext";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleInputChange(e) {
    formData[e.target.name] = e.target.value;
    setFormData({ ...formData });
  }

  function handleLogIn(e) {
    e.preventDefault();
    setLoading(true);
    const promise = logIn(formData);
    promise.then((response) => {
      setUser(response.data);
      setLoading(false);
      navigate("/hoje");
    });
    promise.catch((error) => {
      alert(error.response.data.message);
      setLoading(false);
    });
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
          )}
        </Button>
      </form>
      <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
    </Container>
  );
}
