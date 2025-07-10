import React from "react";
import SideBar from "../Components/SideBar/SideBar";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-3/4 ml-auto">
        <Outlet />
      </div>
    </div>
  );
}
