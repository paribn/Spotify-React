import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <>
      <div className="">
        <Sidebar />
        <Navbar />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </>
  );
}
