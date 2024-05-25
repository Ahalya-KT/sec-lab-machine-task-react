import React from "react";
import { RxDashboard } from "react-icons/rx";
import { FaCloudUploadAlt } from "react-icons/fa";
import { TbInvoice } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { IoMdNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { NavLink } from "react-router-dom";
import img212 from "../images/logos.png";

function Sidebar() {
  return (
    <div>
      <div className="font-semibold  justify-center items-center py-6 gap-4 hidden md:flex">
        <img src={img212} />
        <p className="text-[24px]">Base</p>
      </div>
      <div className="hidden md:flex flex-col gap-10 py-9 px-14 text-zinc-500  w-[15%] h-screen">
        <NavLink
          to="/dashboard/"
          className="flex cursor-pointer  hover:text-[#605BFF]"
        >
          <div className="flex gap-5">
            <RxDashboard size={25} />
            <p>DashBoard</p>
          </div>
        </NavLink>

        <NavLink
          to="upload"
          className="flex gap-4 cursor-pointer hover:text-[#605BFF]"
        >
          <div className="flex gap-5">
            <FaCloudUploadAlt size={25} />
            <p>Upload</p>
          </div>
        </NavLink>

        <NavLink
          to="invoice"
          className="flex gap-4 cursor-pointer hover:text-[#605BFF]"
        >
          <div className="flex gap-5">
            <TbInvoice size={25} />
            <p>Invoice</p>
          </div>
        </NavLink>

        <NavLink
          to="/schedule"
          className="flex gap-4 cursor-pointer hover:text-[#605BFF]"
        >
          <div className="flex gap-5">
            <TbInvoice size={25} />
            <p>Schedule</p>
          </div>
        </NavLink>

        <NavLink
          to="/calender"
          className=" flex gap-4 cursor-pointer hover:text-[#605BFF]"
        >
          <div className="flex gap-5">
            <SlCalender size={25} />
            <p>Calendar</p>
          </div>
        </NavLink>

        <NavLink
          to="/notification"
          className="flex gap-4 cursor-pointer hover:text-[#605BFF]"
        >
          <div className="flex gap-5">
            <IoMdNotifications size={25} />
            <p>Notification</p>
          </div>
        </NavLink>

        <NavLink
          to="/settings"
          className="flex gap-4 cursor-pointer hover:text-[#605BFF]"
        >
          <div className="flex gap-5">
            <IoMdSettings size={25} />
            <p>Settings</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
