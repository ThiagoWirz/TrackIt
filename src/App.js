import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import HabitsPage from './components/HabitsPage';
import './assets/css/reset.css';
import './assets/css/style.css';

export default function App(){

    return(
        <BrowserRouter>
            <Routes>
                 <Route path="/" element={ <LoginPage />} />
                 <Route path="/cadastro" element = {<SignUpPage/>}/>
                 <Route path="/habitos" element = {<HabitsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}