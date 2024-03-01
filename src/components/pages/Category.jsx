import React, { useEffect, useState } from "react";
import Title from "../Title";
import { NavLink, useNavigate } from "react-router-dom";

export default function Category({ id, name, color, photoPath }) {
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/Genre/${id}`)
      .then((x) => x.json())
      .then((x) => setGenre(x));
  }, []);

  return (
    <>
      <NavLink key={id} to={`/categoryDetails/${id}`}>
        <div
          style={{ backgroundColor: color }}
          className="rounded-md before:pt-[100%] before:block relative"
        >
          <div className="absolute inset-0 overflow-hidden text-wrap">
            <h3 className="p-4 text-2xl text-white font-semibold">{name}</h3>
            <img
              src={`https://localhost:44365/Images/${photoPath}`}
              className="w-[6.25rem] h-[6.25rem] rotate-[25deg] translate-x-[18%] translate-y-[5%] absolute bottom-0 right-0"
            />
          </div>
        </div>
      </NavLink>
    </>
  );
}
