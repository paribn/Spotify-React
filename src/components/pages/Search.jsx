import React, { useEffect, useState } from "react";
import Title from "../Title";
import Category from "./Category";

export default function Search({ title, more = false }) {
  const [genre, setGenre] = useState([]);
  const [visible, setVisible] = useState(3);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 5);
  };
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/Genre`)
      .then((x) => x.json())
      .then((data) => setGenre(data));
  }, []);

  console.log(genre);
  const colors = [
    "#e91429",
    "#dc148c",
    "#006450",
    "#8400e7",
    "#0d73ec",
    "#e41d63",
    "#777777",
    "#148a08",
    "#d84000",
    "#8d67ab",
    "#e1118c",
  ];
  return (
    <section>
      <Title title="Browse all" />
      <div className="grid grid-cols-5 gap-6">
        {genre.slice(0, visible).map((x, index) => {
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
        <button onClick={showMoreItems}>Show more</button>
      </div>
    </section>
  );
}
