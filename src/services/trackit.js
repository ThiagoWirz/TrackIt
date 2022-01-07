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

function getHabits(config){
    const promise = axios.get(`${BASE_URL}/habits`, config)
    return promise
}

function createHabit(data, config){
    const promise = axios.post(`${BASE_URL}/habits`, data, config)
    return promise
}

function deleteHabit(id, config){
    const promise = axios.delete(`${BASE_URL}/habits/${id}`, config)
    return promise
}

function getTodayHabits(config){
    const promise = axios.get(`${BASE_URL}/habits/today`, config)
    return promise
}

function markHabit(id, done, config){
    if(!done){
    const promise = axios.post(`${BASE_URL}/habits/${id}/check`, !done, config)
    return promise
}
    else{
        const promise = axios.post(`${BASE_URL}/habits/${id}/uncheck`, !done, config)
        return promise
    }
}

export {signUp, logIn, getHabits, createHabit, deleteHabit, getTodayHabits, markHabit}

