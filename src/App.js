import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NewCollection from "./pages/NewCollection";
import NewExpense from "./pages/NewExpense";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nova-entrada" element={<NewCollection />} />
        <Route path="/nova-saida" element={<NewExpense />} />
      </Routes>
    </BrowserRouter>
  );
}

