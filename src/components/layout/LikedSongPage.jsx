import React, { useState, useEffect } from "react";
import likedSongsImage from "../../assets/img/liked-songs-300.png";
import { Icon } from "../Icons";
import { setData, setPlaying } from "../../redux/slices/player";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

export default function LikedSongPage() {
  const [likedSongs, setLikedSongs] = useState([]);
  const dispacth = useDispatch();
  const [isLiked, setIsLiked] = useState(false);

  const { current, playing, controls, data } = useSelector(
    (state) => state.player
  );
  useEffect(() => {
    const storedLikedSongs = JSON.parse(localStorage.getItem("likedSongs"));
    if (storedLikedSongs && storedLikedSongs.getMusic) {
      setLikedSongs(storedLikedSongs.getMusic);
    }
  }, []);

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

  console.log("likedSongs", likedSongs);
  return (
    <>
      <header className="flex items-end space-x-7  w-full p-4 h-[16.25rem] bg-[#51399e] ">
        <img
          src={likedSongsImage}
          alt="spotify"
          className="h-[14.5rem] w-[14.5rem]"
        />
        <div>
          <span>Playlist</span>
          <h1 className="text-[6rem] font-extrabold text-white">Liked Songs</h1>
        </div>
      </header>

      {likedSongs.length === 0 ? (
        <div className="mt-6 text-center w-full h-[40vh] ">
          <p className="flex justify-center items-center">
            <Icon name="note" className="items-center flex justify-center" />
          </p>
          <p className="text-white font-bold text-[2rem]">
            Songs you like will appear here
          </p>
          <span className="text-white text-sm mt-6 font-semibold">
            Save songs by tapping the heart icon.
          </span>
        </div>
      ) : (
        <section className="mt-6 px-8">
          <div className="w-[67.375rem] h-[2.25rem]">
            <div className="flex grid-cols-1 ml-4 justify-between">
              <span>
                # <span className="ml-6">Title</span>
              </span>
              <span>Album</span>
              <span className="mr-16"></span>
            </div>
          </div>
          {likedSongs.map((song, index) => (
            <div
              key={song.id}
              className="grid grid-cols-6 w-[67.375rem] text-neutral-400 text-sm py-2 mt-4 px-2 hover:bg-white hover:bg-opacity-10 rounded-lg cursor-default"
              onClick={(e) => {
                e.stopPropagation();
                dispacth(setData(song));
                dispacth(setPlaying(true));
              }}
            >
              <div className="flex items-center space-x-6">
                <span>{index + 1}</span>
                <p className="w-20 h-10">
                  <img
                    src={`https://localhost:44365/Images/${song?.musicPhotoUrl}`}
                    alt="photo"
                  />
                </p>

                <span>
                  <p className="w-[25rem] truncate text-white text-base">
                    {song.musicName}
                  </p>
                </span>
                <span>
                  <p className="w-[25rem] truncate text-white text-base">
                    {song.albumName}
                  </p>
                </span>
                <span className="text-start"></span>
                <span>
                  <button
                    className="grid cols-4"
                    onClick={() => {
                      const updatedLikedSongs = likedSongs.filter(
                        (likedSong) => likedSong.id !== song.id
                      );
                      setLikedSongs(updatedLikedSongs);
                      removeMusic();

                      localStorage.setItem(
                        "likedSongs",
                        JSON.stringify({
                          name: "Liked songs",
                          getMusic: updatedLikedSongs,
                        })
                      );
                      setIsLiked(false);
                    }}
                  >
                    <Icon name="greenHeart" />
                  </button>
                </span>
                <span></span>
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
}
