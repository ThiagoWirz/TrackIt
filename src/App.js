import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import HabitsPage from "./components/HabitsPage";
import TodayPage from "./components/TodayPage";
import { useState } from "react";
import UserContext from "./Contexts/userContext";
import "./assets/css/reset.css";
import "./assets/css/style.css";

export default function App() {
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState(0);

  return (
    <UserContext.Provider value={{user, setUser, progress, setProgress}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
