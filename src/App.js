import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import HabitsPage from './components/HabitsPage';
import { useState } from 'react';
import './assets/css/reset.css';
import './assets/css/style.css';

export default function App(){

    const [user, setUser] = useState(null)

    return(
        <BrowserRouter>
            <Routes>
                 <Route path="/" element={ <LoginPage setUser = {setUser} />} />
                 <Route path="/cadastro" element = {<SignUpPage/>}/>
                 <Route path="/habitos" element = {<HabitsPage user = {user}/>}/>
            </Routes>
        </BrowserRouter>
    )
}