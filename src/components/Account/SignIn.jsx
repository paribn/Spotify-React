import { Switch } from "@headlessui/react";
import React from "react";
import { NavLink } from "react-router-dom";

export default function SignIn() {
  return (
    <>
      <div className=" w-full h-full bg-footer p-10 rounded-xl mt-14">
        <form className="max-w-xs mx-auto ">
          <div className="mb-5">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email or username
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
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="remember"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="w-full h-10 rounded-3xl bg-greenPlay text-black font-semibold"
          >
            Log
          </button>
          <div className="text-center mt-5 hover:text-greenPlay underline">
            <NavLink to={"/ForgotPassword"} className=" text-center">
              Forgot your password?
            </NavLink>
          </div>
          <div className="mt-8 text-center">
            Don't have an account ?
            <NavLink
              to={"/register"}
              className=" ml-2 underline  hover:text-greenPlay"
            >
              Signup
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
}
