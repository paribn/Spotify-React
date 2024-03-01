import { useFormik } from "formik";
import React from "react";
import logo from "../../assets/img/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { loginSchema } from "../../validations/loginSchema";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { httpClient } from "../../utils/httpClient";
import { loginAction } from "../../redux/slices/accoutSlice";
import { ToastContainer, toast } from "react-toastify";

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

export default function SignIn() {
  const { token } = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      Password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await httpClient.post("/Account/Login", values, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        dispatch(
          loginAction({
            token: response.token,
            email: response.email,
          })
        );

        console.log(response, "response");
      } catch (error) {
        if (
          error.response &&
          error.response?.data &&
          error.response?.data?.errors
        ) {
          formik.setErrors(error.response?.data?.errors);
        } else {
          console.error("Error submitting form:", error);
        }
      }
    },
    validationSchema: loginSchema,
  });

  const onSubmit = async (e, values) => {
    e.preventDefault();
    console.log(values);
    try {
      const response = await httpClient.post(
        "/Account/Login",
        { email: values.email, password: values.Password },
        {
          headers: {
            Authorization: `Bearer`,
            "Content-Type": "application/json-patch+json",
          },
        }
      );

      console.log(response);

      if (response.data && response.data.token && response.data.email) {
        localStorage.setItem(
          "myData",
          JSON.stringify({
            token: response.data.token,
            email: response.data.email,
          })
        );
        dispatch(
          loginAction({
            token: response.data.token,
            email: response.data.email,
          })
        );

        console.log("success");
        navigate("/");
        notify();
      } else {
        notifyError();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      notifyError();
    }
  };

  return (
    <>
      <div>
        <img src={logo} alt="spotify" className="h-6 mb-4 ml-6" />
      </div>
      <div className=" w-full h-full  p-10 rounded-xl mt-14">
        <form
          className="max-w-xs mx-auto "
          onSubmit={(e) => onSubmit(e, formik.values)}
        >
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email or username
            </label>
            <input
              onChange={formik.handleChange}
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-textColor text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-mainBg dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email && (
              <span style={{ color: "#f15e6c" }}>{formik.errors.email}</span>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium dark:text-white"
            >
              Password
            </label>
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              id="password"
              name="Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-mainBg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
              value={formik.values.Password}
            />
            {formik.errors.Password && formik.touched.Password && (
              <span style={{ color: "#f15e6c" }}>{formik.errors.Password}</span>
            )}
          </div>
          {/* <div className="flex items-start mb-5">
            <label className="inline-flex items-center mb-5 cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-9 h-5  peer-focus:outline-none peer-focus: ring-2 bg-greenPlay peer-focus:ring-white dark:peer-focus:ring-white-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-white-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300  ">
                Remember me
              </span>
            </label>
          </div> */}
          <button
            onClick={(e) => {
              onSubmit(e, formik.values);
            }}
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
