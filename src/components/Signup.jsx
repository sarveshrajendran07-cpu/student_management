import React, { useState } from "react";

import axios from "axios";

import { useNavigate, Link } from "react-router-dom";

import "./Student.css";

function Signup() {
  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    name: "",
    pwd: "",
    gender: "",
    mail: "",
  });

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://92.205.109.210:8070/api/signup",
        signupData
      );

      console.log(response.data);

      alert("✅ Signup Successful");

      navigate("/login");
    } catch (error) {
      console.log(error);

      alert("❌ Signup Failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Signup</h2>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            value={signupData.name}
            onChange={(e) =>
              setSignupData({
                ...signupData,
                name: e.target.value,
              })
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={signupData.pwd}
            onChange={(e) =>
              setSignupData({
                ...signupData,
                pwd: e.target.value,
              })
            }
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={signupData.mail}
            onChange={(e) =>
              setSignupData({
                ...signupData,
                mail: e.target.value,
              })
            }
            required
          />

          <select
            value={signupData.gender}
            onChange={(e) =>
              setSignupData({
                ...signupData,
                gender: e.target.value,
              })
            }
            required
          >
            <option value="">
              Select Gender
            </option>

            <option value="male">Male</option>

            <option value="female">
              Female
            </option>
          </select>

          <button type="submit">
            Signup
          </button>
        </form>

        <p>
          Already have an account?

          <Link to="/login"> Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;