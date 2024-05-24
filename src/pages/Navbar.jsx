import React from "react";
import { FaRegBell } from "react-icons/fa6";
import img2 from "../images/image.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between py-4 px-4 bg-[#FAFAFB] md:flex gap-6">
        <div className="flex gap-5">
          <div className="ml-7 lg:hidden ">
            <RxHamburgerMenu size={30} />
          </div>

          <div>
            <p className="font-bold">Base</p>
          </div>
        </div>

        <div className="md:flex justify-between md:w-full">
          <div className="ml-28 hidden md:block ">
            <p className="font-semibold">Upload CSV</p>
          </div>
          <div className="flex gap-3 mr-10">
            <FaRegBell size={25} className="" />
            <img src={img2} className="rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
