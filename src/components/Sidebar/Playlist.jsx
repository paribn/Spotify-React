import React from "react";
import { Icon } from "../Icons";

export default function Playlist() {
  return (
    <>
      <div className="mx-6  py-2 ml-4 flex-auto overflow-auto ">
        <ul>
          {new Array(20).fill(
            <li>
              <a
                href="#"
                className="  text-white items-center text-sm font-semibold text-link hover:bg-hoverColor py-2 p-2 flex gap-3"
              >
                <span className="bg-playListBg p-3">
                  <Icon name="music" />
                </span>
                My playlist
              </a>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}
