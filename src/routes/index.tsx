import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Details from "../pages/details/details";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Details />} />
    </Routes>
  );
};
export default MainRoute;
