import "./Login.css";
import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

export interface UserProps {
  setUser: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export interface FormProps {
  name?: string;
  email?: string;
  password?: string;
  states?: string;
}

const Login = ({ setUser }: UserProps) => {
  const [formData, setFormData] = useState<FormProps>({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (formData.email || formData.password === "") {
        setError(true);
      }
      setUser(formData.name);
      navigate("/home");
    }, 2000);
  };

  return (
    <>
      <section className="form-container">
        <h1>Login</h1>

        <form className="form" onSubmit={handleSubmit}>
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
    </>
  );
};

export default Login;
