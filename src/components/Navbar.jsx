import React from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

<<<<<<< HEAD
import "./Student.css";
=======
import "./Library.css";
>>>>>>> 96790c7ed8f26afaa4de77a2b49f65016d79f6cf

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
<<<<<<< HEAD
      <h2>Student CRUD</h2>
=======
      <h2>Library System</h2>
>>>>>>> 96790c7ed8f26afaa4de77a2b49f65016d79f6cf

      <div className="nav-links">
        <Link to="/">Home</Link>

<<<<<<< HEAD
        {!isLoggedIn && (
=======
        {!isLoggedIn ? (
>>>>>>> 96790c7ed8f26afaa4de77a2b49f65016d79f6cf
          <>
            <Link to="/login">
              Login
            </Link>

            <Link to="/signup">
              Signup
            </Link>
          </>
<<<<<<< HEAD
        )}

        {isLoggedIn && (
          <>
            <Link to="/add-student">
              Add Student
            </Link>

            <Link to="/students">
              Student List
=======
        ) : (
          <>
            <Link to="/dashboard">
              Dashboard
>>>>>>> 96790c7ed8f26afaa4de77a2b49f65016d79f6cf
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