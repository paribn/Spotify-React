import axios from "axios";
import React, { useState } from "react";
import logo from "../../assets/img/logo.svg";

import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Icon } from "../Icons";

export default function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();

  const url = "https://localhost:44365";

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
    toast.success(" Welcome! Login was made successfully.", {
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

  const [Password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState();
  const token = new URLSearchParams(location.search).get("token");
  const email = new URLSearchParams(location.search).get("email");

  const newResetPasswordData = {
    NewPassword: Password,
    Email: email,
    Token: token,
  };

  async function Reset(e) {
    e.preventDefault();
    if (Password === confirmpassword) {
      const formData = new FormData();
      for (const [key, value] of Object.entries(newResetPasswordData)) {
        formData.append(key, value);
      }

      await axios
        .post(`${url}/api/Account/ResetPassword`, formData, {
          headers: {
            Accept: "*/*",
          },
        })
        .then(function (result) {
          notify();
          navigate("/signin");
        })
        .catch((err) => {
          if (err.response && err.response.data && err.response.data.errors) {
            const errors = err.response.data.errors;
            const errorMessage = errors.join("\n");
            notifyError(errorMessage);
          }
          console.log(err);
        });
    }
  }
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div>
        <img src={logo} alt="spotify" className=" h-[2rem] mb-4 ml-6 w-40" />
      </div>
      <div className=" w-full h-full rounded-xl mt-14 font-semibold ">
        <div className="flex justify-center mb-2">
          <div className=" w-[20rem]  ">
            <h1 className="font-semibold text-2xl text-white">
              Reset password
            </h1>
            <p className="text-sm ">Please enter your new password below.</p>
          </div>
        </div>
        <form className="max-w-xs mx-auto " onSubmit={(e) => Reset(e)}>
          <div className="mb-5">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              New password
            </label>
            <input
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              id="password"
              className="bg-gray-50 border border-textColor text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-mainBg dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-5">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm the new password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="bg-gray-50 border border-textColor text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-mainBg dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value={confirmpassword}
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
            className="w-full h-10 rounded-3xl text-sm bg-greenPlay text-black font-semibold"
          >
            Change your password
          </button>
        </form>
      </div>
    </>
  );
}
