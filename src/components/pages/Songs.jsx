import React, { useEffect, useState } from "react";
import { Icon } from "../Icons";

export default function Songs({ number, music, name, artist, imgSrc }) {
  const [isLiked, setIsLiked] = useState(false);
  // console.log("music 1", musicUrl);
  const likedSongs = JSON.parse(localStorage.getItem("likedSongs"));
  useEffect(() => {
    if (likedSongs) {
      setIsLiked(!!likedSongs?.getMusic?.find((song) => song.id === music.id));
    }

    console.log(isLiked, "isLiked");
  }, [likedSongs]);

  return (
    <div className="grid grid-cols-2 text-neutral-400 text-sm py-4 px-5 hover:bg-white hover:bg-opacity-10 rounded-lg cursor-default items-center ">
      <div className="flex items-center space-x-4">
        {/* <Icon name="playlist" /> */}
        <p> {number}</p>
        <img src={imgSrc} className="h-10 w-10" />
        <div>
          <p className="w-36 lg:w-64 truncate text-white text-base">{name}</p>
          {artist && (
            <p className="w-36 lg:w-64 truncate text-white text-base">
              {artist}
            </p>
          )}
        </div>
      </div>
      <div
        onClick={() => {
          const likedSongs = JSON.parse(localStorage.getItem("likedSongs"));
          if (likedSongs) {
            const isIncluded = likedSongs?.getMusic?.find(
              (song) => song.id === music.id
            );
            if (!isIncluded) {
              setIsLiked(true);
              localStorage.setItem(
                "likedSongs",
                JSON.stringify({
                  name: "Liked songs",
                  getMusic: [...likedSongs.getMusic, music],
                })
              );
            } else {
              setIsLiked(false);
              localStorage.setItem(
                "likedSongs",
                JSON.stringify({
                  name: "Liked songs",
                  getMusic: [
                    ...likedSongs.getMusic.filter(
                      (song) => song.id !== music.id
                    ),
                  ],
                })
              );
            }
          } else {
            setIsLiked(true);
            localStorage.setItem(
              "likedSongs",
              JSON.stringify({
                name: "Liked songs",
                getMusic: [music],
              })
            );
          }
        }}
      >
        <Icon name="heartFilled" />
      </div>
    </div>
  );
}
