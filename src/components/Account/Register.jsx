import React, { useState } from "react";
import logo from "../../assets/img/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { httpClient } from "../../utils/httpClient";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setName } from "../../redux/slices/accoutSlice";
import { useFormik } from "formik";
import { registerSchema } from "../../validations/registerSchema";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Icon } from "../Icons";

export default function Register() {
  const { dispatch } = useDispatch();

  const notifyError = () => {
    toast.error("Failed to log in", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const notify = () => {
    toast.success(" Please check your email.", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const url = "https://localhost:44365";

  const [FullName, setFullName] = useState("");
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const newUser = {
    fullname: FullName,
    username: Username,
    email: Email,
    password: Password,
    confirmPassword: ConfirmPassword,
  };

  const Submit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const [key, value] of Object.entries(newUser)) {
      formData.append(key, value);
    }

    await axios
      .post(`${url}/api/Account/Register`, formData, {
        headers: {
          Accept: "*/*",
        },
      })
      .then((res) => {
        notify();
        console.log(res);
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.errors) {
          const errors = err.response.data.errors;
          const errorMessage = errors.join("\n");
          notifyError(errorMessage);
        }
        console.log(err);
      });
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div>
        <img src={logo} alt="spotify" className=" mb-4 ml-6 w-40 h-[2rem]" />
      </div>
      <div className=" w-full h-full items-center">
        <form className="max-w-sm mx-auto " onSubmit={Submit}>
          <div className="mb-5">
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Full Name
            </label>
            <input
              type="fullname"
              id="fullname"
              className="bg-gray-50 border border-textColor text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-mainBg dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={FullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              User name
            </label>
            <input
              type="username"
              id="username"
              className="bg-gray-50 border border-textColor text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-mainBg dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-textColor text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-mainBg dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium dark:text-white"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-mainBg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium dark:text-white"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-mainBg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value={ConfirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 focus:outline-none"
              >
                {showPassword ? <Icon name="closeEye" /> : <Icon name="eye" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-10 rounded-3xl bg-greenPlay text-black font-semibold"
          >
            Sign Up
          </button>

          <div className="mt-8 text-center">
            Do you have an account ?
            <NavLink
              to={"/signin"}
              className=" ml-2 underline  hover:text-greenPlay"
            >
              Sign in
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
}
