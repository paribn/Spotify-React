import React from "react";
import logo from "../../assets/img/logo.svg";
import Menu from "../Sidebar/Menu";

export default function Sidebar() {
  return (
    <aside className="w-60  bg-slate-800 py-6 flex flex-col">
      <a href="" className="mb-5 px-6">
        <img src={logo} alt="spotify" classNam="h-10" />
      </a>

      <Menu />
    </aside>
  );
}
