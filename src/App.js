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

import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  // Check Login Status
  const [isLoggedIn, setIsLoggedIn] =
    useState(
      localStorage.getItem("isLoggedIn") ===
        "true"
    );

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={
            <Login
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

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