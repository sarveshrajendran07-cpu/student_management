import React, { useState } from "react";

import axios from "axios";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import "./Student.css";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [loginData, setLoginData] =
    useState({
      name: "",
      pwd: "",
    });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
         `${process.env.REACT_APP_API}/api/login`,
        loginData
      );

      console.log(response.data);

      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      setIsLoggedIn(true);

      alert("✅ Login Successful");

      navigate("/dashboard");
    } catch (error) {
      console.log(error);

      alert("❌ Invalid Credentials");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={loginData.name}
            onChange={(e) =>
              setLoginData({
                ...loginData,
                name: e.target.value,
              })
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={loginData.pwd}
            onChange={(e) =>
              setLoginData({
                ...loginData,
                pwd: e.target.value,
              })
            }
            required
          />

          <button type="submit">
            Login
          </button>
        </form>

        <p>
          Don't have an account?

          <Link to="/signup">
            {" "}
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;