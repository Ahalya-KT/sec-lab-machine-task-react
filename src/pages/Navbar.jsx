import React, { useState } from "react";
import { FaRegBell } from "react-icons/fa6";
import img2 from "../images/image.png";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "../component/Sidebar";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FaCloudUploadAlt } from "react-icons/fa";
import { TbInvoice } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { IoMdNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import img212 from "../images/logos.png";
import { AiFillCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [showSideBar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSideBar);
  };

  // enthu patti???
  // >>click cheyyubo verunilla

  // side abr varooola athu hidden allee oru extra sidebar undakkanam copy paste chey

  return (
    <div className="relative">
      {showSideBar && (
        <div className="fixed inset-0 z-20 b">
          {/* sidebar for mobile view */}

          <div className="bg-white">
            <div className="font-semibold flex justify-between   ml-14 py-6 gap-4  ">
              <div className="flex">
                <img src={img212} />
                <p className="text-[24px]">Base</p>
              </div>

              <div className="fixed inset-0 py-7 px-6 " onClick={toggleSidebar}>
                <AiFillCloseCircle size={25} className="cursor-pointer" />
              </div>
            </div>

            <div className=" flex flex-col gap-6 py-9 px-14 text-zinc-500   h-screen">
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
        </div>
      )}
      <div className="flex justify-between py-4 px-4 bg-[#FAFAFB] md:flex gap-6">
        <div className="flex gap-5">
          <div className="ml-7 lg:hidden">
            <RxHamburgerMenu
              size={30}
              className="cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>
        </div>
        <div className="md:flex justify-between md:w-full">
          <div className="hidden md:block">
            <p className="font-semibold">Upload CSV</p>
          </div>
          <div className="flex gap-3 mr-10">
            <FaRegBell size={25} className="text-gray-600" />
            <img src={img2} alt="Profile" className="w-10 h-10 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
