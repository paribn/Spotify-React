import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SongItem from "./SongItem";
import Title from "./Title";

export default function CardItems({ items, title, more = false }) {
  // const [showAll, showLess] = useState(false);

  return (
    <section>
      {/* <header className="flex items-center justify-between ">
        <NavLink
          className="font-semibold text-sm hover:underline"
          onClick={() => showAll(!showLess)}
          to="/search"
        >
          {showLess ? "Show all" : ""}
        </NavLink>
      </header> */}
      <Title title={title} more={more} />

      <div className="grid grid-cols-5 p-4 gap-x-6 overflow-auto">
        {items.map((item) => (
          <SongItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
