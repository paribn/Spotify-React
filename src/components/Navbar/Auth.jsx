import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import Menu from "../Sidebar/Menu";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";

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
  const name = JSON.parse(localStorage.getItem("name"));

  const [isAuth, setIsAuth] = useState(null);

  const location = useLocation();

  useEffect(() => {
    setIsAuth(
      location.pathname.includes("signin") ||
        location.pathname.includes("register")
    );
  }, [location.pathname]);

  if (isAuth) return;
  if (!data?.token)
    return (
      <>
        <div className="flex">
          <div className=" relative  text-left ">
            <div className=" w-64 h-14 ">
              {/* {Email} */}
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
      // <Menu as="div" className="relative inline-block text-left ">
      //   <div>
      //     <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md hover:bg-footer px-3 py-2 text-sm font-semibold text-white shadow-sm ">
      //       {name}
      //     </Menu.Button>
      //   </div>

      //   <Transition
      //     as={Fragment}
      //     enter="transition ease-out duration-100"
      //     enterFrom="transform opacity-0 scale-95"
      //     enterTo="transform opacity-100 scale-100"
      //     leave="transition ease-in duration-75"
      //     leaveFrom="transform opacity-100 scale-100"
      //     leaveTo="transform opacity-0 scale-95"
      //   >
      //     <Menu.Items className="absolute right-0 z-10 mt-2 w-56  bg-black origin-top-right rounded-md hover:bg-dropDown shadow-lg  focus:outline-none">
      //       <div className="py-1">
      //         <form method="POST" action="#">
      //           <Menu.Item>
      //             {({ active }) => (
      //               <button
      //                 type="submit"
      //                 className={classNames(
      //                   active ? "bg-dropDown text-white-900" : "text-white",
      //                   "block w-full px-4 py-2 text-left text-sm"
      //                 )}
      //               >
      //                 Sign out
      //               </button>
      //             )}
      //           </Menu.Item>
      //         </form>
      //       </div>
      //     </Menu.Items>
      //   </Transition>
      // </Menu>
      <>{name}</>
    );
}
