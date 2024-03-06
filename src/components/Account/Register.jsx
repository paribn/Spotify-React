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

export default function Register() {
  const { dispatch } = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.account);
  const [formData, setFormData] = useState({
    Email: "",
    UserName: "",
    Password: "",
    // ConfirmPassword: "",
    FullName: "",
  });
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
    toast.success(" You are successfully registered.", {
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
  const [errors, setErrors] = useState({});
  const formik = useFormik({
    initialValues: {
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
      fullName: "",
    },
    validationSchema: registerSchema,
  });

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
          // ConfirmPassword: formData.ConfirmPassword,
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
        const validationErrors = error.response.data.errors;
        const errorMessage = Object.values(validationErrors).join("\v\r\n");

        formik.setErrors(
          error?.response?.data?.errors ||
            error?.response?.data ||
            "Something went wrong. Please try again later." /// net kesildi sabah bu hisseye bax, rugiyeye bbaxb yazdigin hisse
        );
      }

      localStorage.setItem("name", JSON.stringify(formData.UserName));
      navigate("/signin");
    }

    return (
      <>
        <div>
          <img src={logo} alt="spotify" className=" mb-4 ml-6 w-40 h-[2rem]" />
        </div>
        <div className=" w-full h-full items-center">
          <form
            className="max-w-sm mx-auto "
            onSubmit={(e) => {
              onSubmit(e);
            }}
          >
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
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, Email: e.target.value }));
                }}
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
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-mainBg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={formData.Password}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      Password: e.target.value,
                    }))
                  }
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 focus:outline-none"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 15c-1.714 2.391-4.89 3.947-8.5 3.947S4.714 17.391 3 15M10 12h0"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            {/* <div className="mb-5">
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium dark:text-white"
            >
              Confirm Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-mainBg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={formData.ConfirmPassword}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  ConfirmPassword: e.target.value,
                }))
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
  };
}
