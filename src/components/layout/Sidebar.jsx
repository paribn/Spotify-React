import React from "react";
import logo from "../../assets/img/logo.svg";
import Menu from "../Sidebar/Menu";
import { Icon } from "../Icons";
import { NavLink } from "react-router-dom";
import Playlist from "../Sidebar/Playlist";

export default function Sidebar() {
  return (
    <>
      <aside className="w-72 pt-2 flex flex-col gap-x-1 ">
        <div className="w-50 bg-mainBg py-6 rounded-xl ml-2 mr-2">
          <a href="">
            <img src={logo} alt="spotify" className="h-6 mb-4 ml-6" />
          </a>
          <Menu />
        </div>

        <div className="w-50 bg-mainBg py-6 rounded-xl ml-2 mr-2 mt-2 overflow-auto ">
          <NavLink
            to={"/library"}
            className="h-10  flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4"
            exact
            activeClassName="text-white font-bold"
          >
            <span>
              <Icon name="library" />
            </span>
            Your Library
          </NavLink>
          <nav className="">
            <ul>
              <li>
                <a
                  href="#"
                  className="flex hover:bg-hoverColor w-60 py-4 gap-6 ml-4  text-white items-center  text-sm font-semibold text-link "
                >
                  <span className="ml-3 ">
                    <Icon name="plus" />
                  </span>
                  Create Playlist
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex hover:bg-hoverColor py-2 gap-3 ml-4 p-2 text-white items-center text-sm font-semibold text-link "
                >
                  <span>
                    <Icon name="heart" />
                  </span>
                  Liked Songs
                </a>
              </li>
            </ul>
          </nav>
          <Playlist />
        </div>
      </aside>
    </>
  );
}
