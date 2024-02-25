import React, { useEffect } from "react";
import { Icon } from "../Icons";
import { useSelector } from "react-redux";

export default function Playlist() {
  const { data } = useSelector((state) => state.playlists);
  useEffect(() => {
    //get all playlist
  }, []);

  //data.map

  return (
    <>
      <div className="mx-6  py-2 ml-4 flex-auto no-scrollbar overflow-hidden">
        <ul>
          <li>
            <a
              href="#"
              className="  text-white items-center text-sm font-semibold text-link hover:bg-hoverColor py-2 p-2 flex gap-3"
            >
              <span className="bg-playListBg p-3">
                <Icon name="music" />
              </span>
              My playlist
              {/* //playlist.name */}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
