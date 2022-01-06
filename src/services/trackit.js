import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function signUp(formData){
 const promise = axios.post(`${BASE_URL}/auth/sign-up`, formData)
 return promise
}

function logIn(formData){
    const promise = axios.post(`${BASE_URL}/auth/login`, formData)
    return promise
}

export {signUp, logIn}

