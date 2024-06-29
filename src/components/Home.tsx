import React from 'react'
import { useNavigate } from "react-router-dom";

interface UserProps {
  user: string[]
  setUser: React.Dispatch<React.SetStateAction<string[]>>
}   


const Home = ({ user, setUser }: UserProps) => {
const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    }

  return (
    <div>
      <h1>Welcome to home page {user}</h1>

      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home
