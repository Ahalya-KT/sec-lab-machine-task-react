import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import img from "../images/Base Icon.png";

function SignIn() {
  const navigate = useNavigate();

  const SignInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required(" Email is Required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/\d/, "Password must contain at least one number")
      .matches(
        /[@$!%*?&]/,
        "Password must contain at least one special character (@, $, !, %, *, ?, &)"
      ),
  });

  return (
    <div className="  grid grid-cols-1 md:grid-cols-2 md:h-screen relative">
      {/* div1 */}

      {/* for large screen */}
      <div className="bg-[#605BFF] hidden md:block">
        <div className="py-6 px-6">
          <img src={img} width={50} />
        </div>
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
        <div className="flex flex-col md:ml-40">
          <div className="text-left">
            <p className="text-[36px] font-bold  md:pt-28">Sign In</p>

            <p className="text-[16px]">Sign in to your account</p>
          </div>

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
        <Formik
          initialValues={{
            password: "",
            email: "",
          }}
          validationSchema={SignInSchema}
          onSubmit={(values) => {
            navigate("/dashboard/upload");
            console.log(values);
          }}
        >
          <Form>
            <div>
              <div className="mt-9 flex flex-col md:pt-9 bg-white  md:w-96 md:justify-center items-center mx-auto rounded-xl">
                <div className="flex flex-col mt-6 ">
                  <label>Email address</label>
                  <Field
                    className=" rounded  w-72 p-1 mt-3 bg-[#F5F5F5]"
                    name="email"
                    id="email"
                  />
                  <ErrorMessage
                    name="email"
                    className="text-red-500 text-sm"
                    component="p"
                  />
                </div>

                <div className="flex flex-col pt-5">
                  <label>Password</label>
                  <Field
                    className=" rounded  w-72 p-1 mt-3  bg-[#F5F5F5]"
                    type="password"
                    id="password"
                    name="password"
                  />
                  <ErrorMessage
                    name="password"
                    className="text-red-500 text-sm"
                    component="p"
                  />
                </div>
                <p className="text-sm mr-40 text-[#346BD4]">Forgot Password?</p>

                <button className="font-bold mt-9 p-2 rounded-xl text-white w-80 bg-[#605BFF]">
                  Sign in
                </button>
              </div>
              <p className="text-center pt-2">
                Don’t have an account?{" "}
                <span className="text-[#346BD4]">Register here</span>
              </p>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default SignIn;
