import React, { useEffect, useState } from "react";
import { Icon } from "../Icons";
import { useDispatch, useSelector } from "react-redux";
import { secondsToTime } from "../layout/Utilis";
import player, {
  setControls,
  setCurrent,
  setPlaying,
  setData,
} from "../../redux/slices/player";
import CustomRange from "../layout/Range";
import { ToastContainer, toast } from "react-toastify";
import { useAudio } from "react-use";

const notify = () => {
  toast("🦄 Added to Liked Songs.", {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
    theme: "light",
  });
};

const removeMusic = () => {
  toast(" Removed from Liked Songs", {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
    theme: "light",
  });
};

export default function Songs({ number, music, name, artist, imgSrc }) {
  const dispacth = useDispatch();

  // console.log(music, "musics");
  // const { current, playing, data } = useSelector((state) => state.player);

  const [hover, setHover] = useState(false);

  const [isLiked, setIsLiked] = useState(false);
  const likedSongs = JSON.parse(localStorage.getItem("likedSongs"));
  useEffect(() => {
    if (likedSongs) {
      setIsLiked(!!likedSongs?.getMusic?.find((song) => song.id === music.id));
      console.log(music.albumName);
    }

    console.log(isLiked, "isLiked");
  }, [likedSongs]);

  return (
    <div
      className="grid grid-cols-4 text-neutral-400 text-sm py-2 mt-4 px-4 hover:bg-white hover:bg-opacity-10 rounded-lg cursor-default "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="flex items-center space-x-4"
        onClick={() => {
          dispacth(setData(music));
          dispacth(setPlaying(true));
        }}
      >
        <p>{number}</p>
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
        className="flex justify-end"
        onClick={() => {
          const likedSongs = JSON.parse(localStorage.getItem("likedSongs"));
          if (likedSongs) {
            const isIncluded = likedSongs?.getMusic?.find(
              (song) => song.id === music.id
            );
            if (!isIncluded) {
              setIsLiked(true);
              notify();
              localStorage.setItem(
                "likedSongs",
                JSON.stringify({
                  name: "Liked songs",
                  getMusic: [...likedSongs.getMusic, music],
                })
              );
            } else {
              setIsLiked(false);
              removeMusic();
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
        <button>
          {isLiked ? <Icon name="greenHeart" /> : null}
          {hover && !isLiked ? <Icon name="heartFilled" /> : null}
        </button>
      </div>

      {/* {audio}
      <div className="text-[0.875rem] font-semibold text-white flex items-center justify-between ml-auto md:ml-0 text-opacity-60">
        {secondsToTime(state?.duration)}
      </div> */}
    </div>
  );
}
