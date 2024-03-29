import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";

const Body = () => {
  const menuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className="flex">
      {menuOpen && <Sidebar />}
      <MainContainer />
    </div>
  );
};

export default Body;
