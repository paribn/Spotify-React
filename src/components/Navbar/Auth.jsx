import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { logoutAction } from "../../redux/slices/accoutSlice";
import { useDispatch } from "react-redux";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Auth() {
  const { token } = useSelector((state) => state.account);

  function getStorageValue() {
    const saved = localStorage.getItem("myData");
    const initial = JSON.parse(saved);
    return initial;
  }
  const data = getStorageValue();
  const { email } = useSelector((x) => x.account);

  const [isAuth, setIsAuth] = useState(null);
  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    setIsAuth(
      location.pathname.includes("signin") ||
        location.pathname.includes("register") ||
        location.pathname.includes("ForgotPassword") ||
        location.pathname.includes("resetpassword")
    );
  }, [location.pathname]);

  if (isAuth) return;
  if (!data?.token)
    return (
      <>
        <div className="flex">
          <div className=" relative  text-left ">
            <div className=" w-64 h-14 ">
              <NavLink to={"/register"}>
                <button className=" text-textColor hover:text-white hover:scale-110 duration-150 font-semibold w-28 h-14 rounded-full">
                  Sign up
                </button>
              </NavLink>
              <NavLink to={"/signin"}>
                <button className=" text-hoverColor font-semibold hover:scale-110 duration-150 bg-white w-28 h-12 rounded-full">
                  Log in
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );

  if (data.token)
    return (
      <>
        <div className="flex gap-4">
          <div className="text-white items-center justify-center flex ">
            {email}
          </div>
          <div>
            <button
              onClick={() => dispatch(logoutAction())}
              className=" text-black  hover:scale-110 duration-150 font-semibold bg-white w-28 h-12 rounded-full"
            >
              Log out
            </button>
          </div>
        </div>
      </>
    );
}
