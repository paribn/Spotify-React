import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "./Icons";

const items = [
  {
    id: 1,
    title:
      "Queen mixssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
    desc: "viral trend",
    img: "https://seed-mix-image.spotifycdn.com/v6/img/artist/1dfeR4HaWDbWqFHLkxsg1d/en/default",
    type: "album",
  },
  {
    id: 2,
    title: "Queen mix",
    desc: "viral trend",
    img: "https://images.unsplash.com/photo-1707499929621-8e55b938aeb7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Queen mix",
    desc: "viral trend",
    img: "https://seed-mix-image.spotifycdn.com/v6/img/artist/1dfeR4HaWDbWqFHLkxsg1d/en/default",
    type: "artist",
  },
  {
    id: 4,
    title: "MFO",
    desc: "Artist",
    img: "https://i.scdn.co/image/ab67616d00001e029ee0dd0ae7e5c49101c99ef4",
  },
  {
    id: 5,
    title: "Queen mix",
    desc: "viral trend",
    img: "https://seed-mix-image.spotifycdn.com/v6/img/artist/1dfeR4HaWDbWqFHLkxsg1d/en/default",
  },
];

export default function CardItems({ title }) {
  const [showAll, showLess] = useState(false);

  const imageStyle = (item) => {
    switch (item.type) {
      case "artist":
        return "rounded-full";
      case "album":
        return "rounded-lg";
    }
  };
  return (
    <section>
      <header className="flex items-center justify-between ">
        <h3 className="text-2xl text-white font-semibold mt-2 hover:underline">
          {title}
        </h3>

        <NavLink
          className="font-semibold text-sm hover:underline"
          onClick={() => showAll(!showLess)}
          to="/search"
        >
          {showLess ? "Show all" : ""}
        </NavLink>
      </header>
      <div className="grid grid-cols-5 p-4 gap-x-6 overflow-auto">
        {items.map((item) => (
          <NavLink
            className=" bg-hoverColor p-4 rounded hover:bg-dropDown group"
            key={item.id}
            to="/"
          >
            <div className="pt-[100%] relative mb-4">
              <img
                src={item.img}
                className={`absolute inset-0 w-full h-full ${imageStyle(
                  item
                )} `}
              />
              <button className="w-12 h-12 rounded-full bg-greenPlay absolute bottom-1 right-1 group-hover:flex group-focus:flex ease-out duration-300 items-center justify-center hidden">
                <Icon name="play" />
              </button>
            </div>

            <h6 className=" overflow-hidden  overflow-ellipsis whitespace-nowrap font-semibold text-white ">
              {item.title}
            </h6>
            <p className=" line-clamp-2 text-sm ">{item.desc}</p>
          </NavLink>
        ))}
      </div>
    </section>
  );
}
