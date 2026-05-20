import React, { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

<<<<<<< HEAD
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";
import StudentList from "./pages/StudentList";

import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  // Check Login Status
=======
import Login from "./components/Login";
import Signup from "./components/Signup";

import Dashboard from "./pages/Dashboard";

function App() {
>>>>>>> 96790c7ed8f26afaa4de77a2b49f65016d79f6cf
  const [isLoggedIn, setIsLoggedIn] =
    useState(
      localStorage.getItem("isLoggedIn") ===
        "true"
    );

  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Navbar isLoggedIn={isLoggedIn} />

      <Routes>
        <Route path="/" element={<Home />} />
=======
      <Routes>
        {/* Default Route */}

        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/dashboard" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Login */}
>>>>>>> 96790c7ed8f26afaa4de77a2b49f65016d79f6cf

        <Route
          path="/login"
          element={
            <Login
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />

<<<<<<< HEAD
=======
        {/* Signup */}

>>>>>>> 96790c7ed8f26afaa4de77a2b49f65016d79f6cf
        <Route
          path="/signup"
          element={<Signup />}
        />

<<<<<<< HEAD
        {/* Protected Routes */}

        <Route
          path="/add-student"
          element={
            isLoggedIn ? (
              <AddStudent />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/students"
          element={
            isLoggedIn ? (
              <StudentList />
=======
        {/* Protected Dashboard */}

        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <Dashboard
                setIsLoggedIn={
                  setIsLoggedIn
                }
              />
>>>>>>> 96790c7ed8f26afaa4de77a2b49f65016d79f6cf
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;