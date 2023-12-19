import React from "react";
import Navbar from "../pages/navbar/Navbar";
import { Outlet } from "react-router-dom";

const LandingPage = () => {
  return <div>
     <Navbar/>
     <Outlet/>
  </div>;
};

export default LandingPage;
