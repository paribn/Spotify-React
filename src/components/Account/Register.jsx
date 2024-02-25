import React, { useState } from "react";
import logo from "../../assets/img/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { httpClient } from "../../utils/httpClient";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setName } from "../../redux/slices/accoutSlice";

export default function Register() {
  const { dispatch } = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.account);
  const [formData, setFormData] = useState({
    Email: "",
    UserName: "",
    Password: "",
    ConfirmPassword: "",
    FullName: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await httpClient.post(
        "/Account/Register",
        {
          email: formData.Email,
          Password: formData.Password,
          UserName: formData.UserName,
          FullName: formData.FullName,
          ConfirmPassword: formData.ConfirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      dispatch(setName(formData.UserName));

      console.log("Form submitted successfully");
    } catch (error) {
      if (
        error.response &&
        error.response?.data &&
        error.response?.data?.errors
      ) {
        console.error("Error submitting form:", error);
      }
    }

    localStorage.setItem("name", JSON.stringify(formData.UserName));
    navigate("/signin");
  };
  return (
    <>
      <div>
        <img src={logo} alt="spotify" className="h-6 mb-4 ml-6" />
      </div>
      <div className=" w-full h-full items-center">
        <form className="max-w-sm mx-auto " onSubmit={(e) => onSubmit(e)}>
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
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, Email: e.target.value }))
              }
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
              type="text"
              id="text"
              className="bg-gray-50 border border-textColor text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-mainBg dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  UserName: e.target.value,
                  FullName: e.target.value,
                }))
              }
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-mainBg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  Password: e.target.value,
                  ConfirmPassword: e.target.value,
                }))
              }
            />
          </div>
          {/* <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium dark:text-white"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-mainBg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={formData.password}
              onChange={() =>
                setFormData((prev) => ({ ...prev, password: value }))
              }
            />
          </div> */}

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
