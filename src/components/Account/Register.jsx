import React from "react";
import logo from "../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";

export default function Register() {
  return (
    <>
      <div>
        <img src={logo} alt="spotify" className="h-6 mb-4 ml-6" />
      </div>
      <div className=" w-full h-full items-center">
        <form className="max-w-sm mx-auto ">
          <div className="mb-5">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-textColor text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-mainBg dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-5">
            <label
              for="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              User name
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-textColor text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-mainBg dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-5">
            <label
              for="password"
              className="block mb-2 text-sm font-medium dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-mainBg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-5">
            <label
              for="password"
              className="block mb-2 text-sm font-medium dark:text-white"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-mainBg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
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
              to={"/SignIn"}
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
