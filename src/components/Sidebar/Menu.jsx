import React from "react";
import { Icon } from "../Icons";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <NavLink
            activeclassname="text-white font-bold"
            to={"/"}
            className="h-10  flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4"
          >
            <span>
              <Icon name="home" />
            </span>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/search"}
            className="h-10  flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4"
            activeclassname="text-white font-bold"
          >
            <span>
              <Icon name="search" />
            </span>
            Search
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
