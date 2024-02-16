import React from "react";
import Title from "../Title";
import { NavLink } from "react-router-dom";

export default function Category({ id, name, color }) {
  return (
    <>
      <NavLink key={id} to="/">
        <div
          style={{ backgroundColor: color }}
          className="rounded-md before:pt-[100%] before:block relative"
        >
          <div className="absolute inset-0">
            <h3 className="p-4 text-2xl text-white font-semibold">{name}</h3>
          </div>
        </div>
      </NavLink>
    </>
  );
}
