import React from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import "./Library.css";

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
      <h2>Library System</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        {!isLoggedIn ? (
          <>
            <Link to="/login">
              Login
            </Link>

            <Link to="/signup">
              Signup
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">
              Dashboard
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