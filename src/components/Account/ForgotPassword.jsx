import React from "react";
import { NavLink } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className=" w-full h-full rounded-xl mt-14 font-semibold ">
      <div className="flex justify-center mb-2">
        <div className=" w-64  ">
          <h1 className="font-semibold text-2xl text-white">
            Reset your password
          </h1>
          <p className="text-sm ">
            Please enter your email address or username. We'll send you a link
            to regain access to your account.
          </p>
        </div>
      </div>
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

        <button
          type="submit"
          className="w-full h-10 rounded-3xl text-sm bg-greenPlay text-black font-semibold"
        >
          Send Link
        </button>
      </form>
    </div>
  );
}
