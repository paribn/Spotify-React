import React from "react";
import Navigation from "../Navbar/Navigation";
import Auth from "../Navbar/Auth";
import { useLocation } from "react-router-dom";
import Search from "../Navbar/Search";

export default function Navbar() {
  const location = useLocation();
  const isSeacrhRoute = location.pathname === "/search";
  return (
    <>
      <nav className="h-[3.75rem] flex items-center justify-between px-8 bg-nav  ">
        <Navigation />
        {isSeacrhRoute && <Search />}
        <Auth />
      </nav>
    </>
  );
}
