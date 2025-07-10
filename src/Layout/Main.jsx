import React from "react";
import SideBar from "../Components/SideBar/SideBar";
import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation/Navigation";

export default function Main() {
  return (
    <div className="flex flex-col md:flex-row">
      <SideBar />
      <div className="md:w-3/4 md:ml-auto">
        <Outlet />
      </div>
      <div className="h-screen hidden md:flex items-center">
        <Navigation />
      </div>
    </div>
  );
}
