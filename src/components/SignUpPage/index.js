import { Container, Button } from "../LoginPage/style";
import logo from "../../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUp } from "../../services/trackit";
import Loader from 'react-loader-spinner';

export default function SignUpPage() {

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    image:""
  })

  function handleInputChange(e) {
    formData[e.target.name] = e.target.value
    setFormData({...formData})
  }
  
  function handleSingUp(e){
    e.preventDefault();
    setLoading(true)
    const promise = signUp(formData)
    promise.then(response => {console.log(response.data)  
    setLoading(false)})
    promise.catch(error => {console.log(error.response.data)
    setLoading(false)})
  }

  return (
    <Container>
      <img src={logo} alt="TrackIt" />
      <form onSubmit={handleSingUp}>
      <input value = {formData.email} type="email" placeholder="email" name = "email"  onChange={handleInputChange} disabled={loading} />
      <input value = {formData.password} type="password" placeholder="senha" name = "password" onChange={handleInputChange} disabled={loading} />
      <input value = {formData.name} type="text" placeholder="nome" name = "name" onChange={handleInputChange} disabled={loading} />
      <input value = {formData.image} type="text" placeholder="foto" name = "image" onChange={handleInputChange} disabled={loading} />
      <Button disabled={loading} >{loading ?
                    <Loader
                        type="ThreeDots"
                        color="#FFFFFF"
                        height={13}
                        width={51}
                        timeout={3000}
                    /> : 'Cadastrar'}</Button>
      </form>
      <Link to="/">Já tem uma conta? Faça login!</Link>
    </Container>
  );
}
