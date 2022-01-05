import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignInPage from './components/SignInPage';
import HabitsPage from './components/HabitsPage';
import './assets/css/reset.css';
import './assets/css/style.css';

export default function App(){

    return(
        <BrowserRouter>
            <Routes>
                 {/* <Route path="/" element={ <LoginPage />} />
                 <Route path="/cadastro" element = {<SignInPage/>}/> */}
                 <Route path="/" element = {<HabitsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}