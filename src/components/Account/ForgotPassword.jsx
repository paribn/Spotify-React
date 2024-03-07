import axios from "axios";
import React, { useState } from "react";
import logo from "../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function ForgotPassword() {
  const url = "https://localhost:44365";
  const [Email, setEmail] = useState("");

  console.log(Email);

  const newEmail = {
    email: Email,
  };
  const notifyError = () => {
    toast.error("Something went wrong", {
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
    toast.success(" Please,check your email", {
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
  async function SendMail(e) {
    e.preventDefault();
    const formData = new FormData();
    for (const [key, value] of Object.entries(newEmail)) {
      formData.append(key, value);
    }

    await axios
      .post(`${url}/api/Account/ForgotPassword`, formData, {
        headers: {
          Accept: "*/*",
        },
      })
      .then(() => {
        notify();
      })
      .catch(() => {
        notifyError();
      });
  }

  return (
    <>
      <div>
        <img src={logo} alt="spotify" className=" h-[2rem] mb-4 ml-6 w-40" />
      </div>
      <div className=" w-full h-full rounded-xl mt-14 font-semibold ">
        <div className="flex justify-center mb-2">
          <div className=" w-[20rem]  ">
            <h1 className="font-semibold text-2xl text-white">
              Reset your password
            </h1>
            <p className="text-sm ">
              Please enter your email address or username. We'll send you a link
              to regain access to your account.
            </p>
          </div>
        </div>
        <form className="max-w-xs mx-auto " onSubmit={(e) => SendMail(e)}>
          <div className="mb-5">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email or username
            </label>
            <input
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
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
    </>
  );
}
