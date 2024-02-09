import React from "react";
import logo from "../../assets/img/logo.svg";
import Menu from "../Sidebar/Menu";

export default function Sidebar() {
  return (
    <>
      <aside className="w-72 py-2 flex flex-col gap-x-1 ">
        <div className="w-50 bg-mainBg py-2 rounded-xl ">
          <a href="">
            <img src={logo} alt="spotify" className="h-6 mb-4 ml-10" />
          </a>
          <Menu />
        </div>
      </aside>
    </>
  );
}
