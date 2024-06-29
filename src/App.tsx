import { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./Register";



function App() {
  const [user, setUser] = useState<string[]>([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/home" element={<Home user={user} setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
