import React, { useEffect, useState } from "react";
import Title from "../Title";
import Category from "./Category";

export default function Search({ title, more = false }) {
  const [genre, setGenre] = useState([]);
  useEffect(() => {
    fetch("https://localhost:44365/api/Genre")
      .then((x) => x.json())
      .then((x) => setGenre(x));
  }, []);

  const colors = [
    "#dc148c",
    "#006450",
    "#0d73ec",
    "#8400e7",
    "#d84000",
    "#8d67ab",
    "#e1118c",
  ];
  return (
    <section>
      <Title title="Browse all" />
      <div className="grid grid-cols-5 gap-6">
        {genre.map((x, index) => {
          const color = colors[index % colors.length];
          return <Category key={x.id} id={x.id} name={x.name} color={color} />;
        })}
      </div>
    </section>
  );
}
