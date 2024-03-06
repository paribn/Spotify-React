import React, { useEffect, useState } from "react";
import { Icon } from "../Icons";
import { useSelector } from "react-redux";

export default function Playlist() {
  const { userId } = useSelector((state) => state.account.token);
  const [playlist, setPlaylist] = useState([]);

  console.log(userId);
  // useEffect(() => {
  //   //get all playlist
  // }, []);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API}/PlayList/GetUserPlaylist?userId=${userId}`
    )
      .then((x) => x.json())
      .then((x) => setPlaylist(x));
  }, []);

  //data.map

  return (
    <>
      {playlist.map((x) => (
        <div
          key={x.id}
          className="mx-6  py-2 ml-4 flex-auto no-scrollbar overflow-hidden"
        >
          <ul>
            <li key={x.id}>
              <a
                href="#"
                className="  text-white items-center text-sm font-semibold text-link hover:bg-hoverColor py-2 p-2 flex gap-3"
              >
                <span className="bg-playListBg p-3">
                  <Icon name="music" />
                </span>
                {x.title}
              </a>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}
