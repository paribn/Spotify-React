import React, { useEffect, useState } from "react";
import Title from "../Title";
import Category from "./Category";

export default function Search({ title, more = false }) {
  const [genre, setGenre] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const params = {
    page,
    perPage,
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/Genre`)
      .then((x) => x.json())
      .then((x) => setGenre(x));
  }, []);

  console.log(genre);
  const colors = [
    "#e91429",
    "#dc148c",
    "#006450",
    "#8400e7",
    "#0d73ec",
    "#148a08",
    "#e41d63",
    "#777777",
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
          return (
            <Category
              key={x.id}
              id={x.id}
              name={x.name}
              color={color}
              photoPath={x.photoPath}
            />
          );
        })}
      </div>
    </section>
  );
}
