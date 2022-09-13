import React from "react";
import ContextApi from "./ContextApi";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import SignUp from "./Pages/login/SignUp";

const Main = () => {
  return (
    <ContextApi>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </ContextApi>
  );
};

export default Main;
