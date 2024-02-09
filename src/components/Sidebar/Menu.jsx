import React from "react";

export default function Menu() {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <a
            href=""
            className="h-10  flex items-center text-sm font-semibold text-link hover:text-white px-4"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href=""
            className="h-10  flex items-center text-sm font-semibold text-link hover:text-white px-4"
          >
            Search
          </a>
        </li>
        <li>
          <a
            href=""
            className="h-10  flex items-center text-sm font-semibold text-link hover:text-white px-4"
          >
            Your Library
          </a>
        </li>
      </ul>
    </nav>
  );
}
