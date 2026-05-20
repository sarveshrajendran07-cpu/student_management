import React, { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";
import StudentList from "./pages/StudentList";
import Dashboard from "./pages/Dashboard";

import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [isLoggedIn, setIsLoggedIn] =
    useState(
      localStorage.getItem("isLoggedIn") ===
        "true"
    );

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} />

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
        <Route
          path="/login"
          element={
            <Login
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />

        {/* Signup */}
        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <Dashboard
                setIsLoggedIn={
                  setIsLoggedIn
                }
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Add Student */}
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

        {/* Student List */}
        <Route
          path="/students"
          element={
            isLoggedIn ? (
              <StudentList />
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