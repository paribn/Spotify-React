import React, { useEffect, useState } from "react";
import { Icon } from "./Icons";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent, setData, setPlaying } from "../redux/slices/player";
import { NavLink, useNavigate } from "react-router-dom";

export default function SongItem({ id, photoPath, name, artistType }) {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { current, playing, controls, data } = useSelector(
    (state) => state.player
  );

  const [isCurrentItem, setIsCurrentItem] = useState(null);
  useEffect(() => {
    setIsCurrentItem(data && data.artistId === id && current);
  }, [data, current]);

  const cardStyle =
    artistType && typeof artistType === "string" && artistType.includes("Band")
      ? "rounded-lg"
      : "rounded-full";

  const updateCurrent = async (e) => {
    if (!current) {
      e.stopPropagation();
      const result = await fetch(`https://localhost:44365/api/Artist/${id}`);
      const data = await result.json();
      dispacth(
        setData(
          data.musicGet.length > 0
            ? { ...data.musicGet[0], artistId: id, artistName: name }
            : null
        )
      );
      dispacth(setCurrent(true));
      dispacth(setPlaying(true));
    } else {
      dispacth(setPlaying(false));
    }
  };

  return (
    <div
      className=" bg-hoverColor p-4 rounded hover:bg-dropDown group"
      key={id}
      onClick={() => navigate(`/cardDetails/${id}?isPlaylist=0`)}
    >
      <div className="pt-[100%] relative mb-4">
        <img
          src={`https://localhost:44365/Images/${photoPath}`}
          className={`absolute inset-0 w-full h-full ${cardStyle} `}
        />
        <button
          onClick={(e) => updateCurrent(e)}
          className={`w-12 h-12 rounded-full bg-greenPlay absolute bottom-1 right-1 group-hover:flex group-focus:flex ease-out duration-300 items-center justify-center ${
            !isCurrentItem ? "hidden" : "flex"
          }`}
        >
          <Icon name={isCurrentItem && playing ? "pause" : "play"} />
        </button>
      </div>

      <h6 className=" overflow-hidden  overflow-ellipsis whitespace-nowrap font-semibold text-white ">
        {name}
      </h6>
      <p className=" line-clamp-2 text-sm ">{artistType}</p>
    </div>
  );
}
