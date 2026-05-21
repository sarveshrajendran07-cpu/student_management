import React from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import "./Student.css";

function Navbar({ isLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(
      "isLoggedIn"
    );

    navigate("/login");

    window.location.reload();
  };

  return (
    <nav className="navbar">
      <h2>Student CRUD</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        {!isLoggedIn && (
          <>
            <Link to="/login">
              Login
            </Link>

            <Link to="/signup">
              Signup
            </Link>
          </>
        )}

        {isLoggedIn && (
          <>
            <Link to="/add-student">
              Add Student
            </Link>

            <Link to="/students">
              Student List
            </Link>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;