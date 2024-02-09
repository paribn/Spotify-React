import React from "react";
import { Icon } from "../Icons";

export default function Menu() {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <a
            href=""
            className="h-10  flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4"
          >
            <span>
              <Icon name="home" />
            </span>
            Home
          </a>
        </li>
        <li>
          <a
            href=""
            className="h-10  flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4"
          >
            <span>
              <Icon name="search" />
            </span>
            Search
          </a>
        </li>
        <li>
          <a
            href=""
            className="h-10  flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4"
          >
            <span>
              <Icon name="library" />
            </span>
            Your Library
          </a>
        </li>
      </ul>
    </nav>
  );
}
