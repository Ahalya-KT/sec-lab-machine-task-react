import React from "react";
import Sidebar from "../component/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
