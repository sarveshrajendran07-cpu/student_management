import React, { useState } from "react";

import axios from "axios";

<<<<<<< HEAD
import { useNavigate, Link } from "react-router-dom";

import "./Student.css";
=======
import {
  useNavigate,
  Link,
} from "react-router-dom";

import "./Library.css";
>>>>>>> 96790c7ed8f26afaa4de77a2b49f65016d79f6cf

function Signup() {
  const navigate = useNavigate();

<<<<<<< HEAD
  const [signupData, setSignupData] = useState({
    name: "",
    pwd: "",
    gender: "",
    mail: "",
  });
=======
  const [signupData, setSignupData] =
    useState({
      name: "",
      pwd: "",
      gender: "",
      mail: "",
    });
>>>>>>> 96790c7ed8f26afaa4de77a2b49f65016d79f6cf

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
<<<<<<< HEAD
      const response = await axios.post(
=======
      await axios.post(
>>>>>>> 96790c7ed8f26afaa4de77a2b49f65016d79f6cf
        "http://92.205.109.210:8070/api/signup",
        signupData
      );

<<<<<<< HEAD
      console.log(response.data);

=======
>>>>>>> 96790c7ed8f26afaa4de77a2b49f65016d79f6cf
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
<<<<<<< HEAD
        <h2>Signup</h2>
=======
        <h2>Library Signup</h2>
>>>>>>> 96790c7ed8f26afaa4de77a2b49f65016d79f6cf

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

<<<<<<< HEAD
          <Link to="/login"> Login</Link>
=======
          <Link to="/login">
            {" "}
            Login
          </Link>
>>>>>>> 96790c7ed8f26afaa4de77a2b49f65016d79f6cf
        </p>
      </div>
    </div>
  );
}

export default Signup;