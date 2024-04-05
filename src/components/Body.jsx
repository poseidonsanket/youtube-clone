import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const menuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className="md:flex md:w-screen">
      {menuOpen && <Sidebar />}
      <Outlet/>
    </div>
  );
};

export default Body;
