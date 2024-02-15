import React from "react";
import { Icon } from "./Icons";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "../stores/player";

export default function SongItem({
  item,
  id,
  photoUrl,
  artistname,
  artistType,
}) {
  const dispacth = useDispatch();
  const { current, playing, controls } = useSelector((state) => state.player);

  const cardStyle = artistType.includes("Band") ? "rounded-lg" : "rounded-full";

  const updateCurrent = () => {
    dispacth(setCurrent(item));
    // if (current.id == item.id) {
    //   if (playing) {
    //     controls.pouse();
    //   } else {
    //     controls.play();
    //   }
    // }
  };

  const isCurrentItem = current?.id == id && playing;
  return (
    <NavLink
      className=" bg-hoverColor p-4 rounded hover:bg-dropDown group"
      key={id}
      to="/"
    >
      <div className="pt-[100%] relative mb-4">
        <img
          src={`https://localhost:44365/musicAlbomimg/${photoUrl}`}
          className={`absolute inset-0 w-full h-full ${cardStyle} `}
        />
        <button
          onClick={updateCurrent}
          className={`w-12 h-12 rounded-full bg-greenPlay absolute bottom-1 right-1 group-hover:flex group-focus:flex ease-out duration-300 items-center justify-center ${
            !isCurrentItem ? "hidden" : "flex"
          }`}
        >
          <Icon name={isCurrentItem ? "pause" : "play"} />
        </button>
      </div>

      <h6 className=" overflow-hidden  overflow-ellipsis whitespace-nowrap font-semibold text-white ">
        {artistname}
      </h6>
      <p className=" line-clamp-2 text-sm ">{artistType}</p>
    </NavLink>
  );
}
