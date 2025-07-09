import React from "react";
import SideBar from "../Components/SideBar/SideBar";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
