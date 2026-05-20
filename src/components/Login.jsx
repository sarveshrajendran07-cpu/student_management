import React, { useState } from "react";

import axios from "axios";

import {
  useNavigate,
  Link,
} from "react-router-dom";

<<<<<<< HEAD
import "./Student.css";
=======
import "./Library.css";
>>>>>>> 96790c7ed8f26afaa4de77a2b49f65016d79f6cf

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
<<<<<<< HEAD
      const response = await axios.post(
=======
      await axios.post(
>>>>>>> 96790c7ed8f26afaa4de77a2b49f65016d79f6cf
        "http://92.205.109.210:8070/api/login",
        loginData
      );

<<<<<<< HEAD
      console.log(response.data);

      // Store Login
=======
>>>>>>> 96790c7ed8f26afaa4de77a2b49f65016d79f6cf
      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      setIsLoggedIn(true);

      alert("✅ Login Successful");

<<<<<<< HEAD
      navigate("/students");
=======
      navigate("/dashboard");
>>>>>>> 96790c7ed8f26afaa4de77a2b49f65016d79f6cf
    } catch (error) {
      console.log(error);

      alert("❌ Invalid Credentials");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
<<<<<<< HEAD
        <h2>Login</h2>
=======
        <h2>Library Login</h2>
>>>>>>> 96790c7ed8f26afaa4de77a2b49f65016d79f6cf

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