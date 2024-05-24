import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

// import img1 from "../images/Ellipse.jpg";

function SignIn() {
  return (
    <div className="  grid grid-cols-1 md:grid-cols-2 md:h-screen">
      {/* div1 */}

      <div className="bg-[#605BFF] hidden md:block">
        {/* <img src={img1} /> */}

        <div className="flex flex-col items-center justify-center w-full h-[90vh]">
          <p className="font-extrabold text-white  text-3xl">BASE</p>
        </div>

        <div className="flex items-center justify-center text-white gap-10">
          <FaGithub size={30} />
          <FaTwitter size={30} />
          <FaLinkedin size={30} />
          <FaDiscord size={30} />
        </div>
      </div>
      {/* for small screen */}
      <div className="lg:hidden bg-[#605BFF] h-12">
        <p className="font-bold text-white mt-3 ml-3">BASE</p>
      </div>

      {/* div2 */}
      <div className="bg-[#F8FAFF] p-10">
        <div className="flex flex-col justify-center items-center">
          <p className="text-[36px] font-bold  md:pt-28">Sign In</p>

          <p className="text-[16px]">Sign in to your account</p>

          <div className="pt-7 text-xs flex  gap-8 ">
            <div className="flex bg-white justify-center items-center">
              <FcGoogle className="ml-2" size={20} />
              <p className=" p-2 rounded-xl">Sign in With Google</p>
            </div>

            <div className=" flex bg-white justify-center items-center">
              <FaApple className="ml-2 text-gray-400" size={20} />
              <p className="bg-white p-2 rounded-xl">Sign in With Apple</p>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-9 flex flex-col md:pt-9 bg-white  md:w-96 md:justify-center items-center mx-auto rounded-xl">
            <div className="flex flex-col mt-6 ">
              <label>Email address</label>
              <input className=" rounded  w-72 p-1 mt-3 bg-[#F5F5F5]" />
            </div>

            <div className="flex flex-col pt-5">
              <label>Password</label>
              <input
                className=" rounded  w-72 p-1 mt-3  bg-[#F5F5F5]"
                type="password"
              />
            </div>
            <p className="text-sm mr-40 text-[#346BD4]">Forgot Password?</p>

            <button className="font-bold mt-9 p-2 rounded-xl text-white w-80 bg-[#605BFF]">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
