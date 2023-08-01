import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import MainPage from "./Pages/MainPage";
import Admin from "./Pages/Admin"
import Users from "./Pages/Users"
import Courses from "./Pages/Courses";
// import { useEffect, useState } from 'react'


// Define your routes
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* DEFAULT */}
          <Route path="/" element={<MainPage />} />
          {/*ADMIN*/}
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/login" element={<Login page={"admin"}/>} />
          <Route path="/admin/signup" element={<SignUp page={"admin"}/>} />
          <Route path={"/admin/courses"} element={<Courses/>}/>

          {/* USERS */}
          <Route path="/user" element={<Users />} />
           <Route path="/users/login" element={<Login page={"user"}/>} />
           <Route path="/users/signup" element={<SignUp page={"user"}/>} />
           
        </Routes>
      </Router>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
