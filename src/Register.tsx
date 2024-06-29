import "./Register.css";
import React, { useState, useEffect } from "react";
import { UserProps, FormProps } from "./components/Login";
import Loading from "./components/Loading";
import axios from "axios";
import { useNavigate } from "react-router-dom";


interface States {
  id: number;
  sigla: string;
  nome: string;
  estado: string;

}

const Register = ({ setUser }: UserProps) => {
  const [formData, setFormData] = useState<FormProps>({
    name: "",
    email: "",
    password: "",
    // states: "",
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [state, setState] = useState<States[]>([]);
  const [stateSelected, setStateSelected] = useState<string>("");
  const Navigate = useNavigate();


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (formData.email || formData.password === "") {
        setError(true);
      }
      setUser(formData.name);
      Navigate("/home");
    }, 2000);
  };

  //================================ Fetching Data =================================
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://brasilapi.com.br/api/ibge/uf/v1');
      const data = response.data;
      setState(data);
    } 
    fetchData();
  
    // const fetchData = async () => {
    //   const response = await fetch('http://brasilapi.com.br/api/ibge/uf/v1');
    //   const data = await response.json();
    //   setState(data);    
    // } 
    // fetchData();
  },[])
   

console.log(stateSelected);

const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
  setStateSelected(event.target.value);
};


  return (
    <section className="form-container">
      <h1>Register</h1>

      <form className="form" onSubmit={handleSubmit}>
        <select className="form" value={stateSelected} onChange={handleChange}>
          {state.map((state) => (
            <option
            key={state.id}
            className="options"
            >
              {state.nome}
            </option>
          ))}
        </select>

        <input
          className="input"
          type="name"
          name="name"
          placeholder="Name"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />

        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />

        <button type="submit">Login</button>
      </form>

      {loading && <Loading />}

      {error && <p>Please fill all the fields</p>}
    </section>
  );
};

export default Register;
