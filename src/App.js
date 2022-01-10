import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import HabitsPage from "./components/HabitsPage";
import TodayPage from "./components/TodayPage";
import { useState } from "react";
import UserContext from "./Contexts/userContext";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import HistoryPage from "./components/HistoryPage";

export default function App() {
  const lastUser = JSON.parse(localStorage.getItem("Last User"))
  const [user, setUser] = useState(lastUser);
  const [progress, setProgress] = useState(0);

  return (
    <UserContext.Provider value={{user, setUser, progress, setProgress}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/historico" element={<HistoryPage/>} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
