import React from "react";
import { Icon } from "../Icons";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <NavLink
            activeClassName="text-white font-bold"
            exact
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
            exact
            activeClassName="text-white font-bold"
          >
            <span>
              <Icon name="search" />
            </span>
            Search
          </NavLink>
        </li>
        <li></li>
      </ul>
    </nav>
  );
}
