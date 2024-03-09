import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Icon } from "../Icons";
import { setData, setPlaying } from "../../redux/slices/player";

export default function CategoryDetails({ id }) {
  const [genre, setGenre] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const { current, playing, controls, data } = useSelector(
    (state) => state.player
  );

  console.log(genre, "genree");
  const [isCurrentItem, setIsCurrentItem] = useState(null);

  useEffect(() => {
    const getGenre = async () => {
      try {
        const result = await fetch(
          `${process.env.REACT_APP_API}/Genre/${params.id}`
        );
        if (!result.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await result.json();
        console.log("result", result);
        setLoading(false);
        setError(null);
        setGenre(data);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    getGenre();
  }, []);

  return (
    <>
      <header className="w-full h-[15.625rem] bg-slate-500 flex justify-start items-end  p-6">
        <h1 className="text-[6rem] font-bold text-white">{genre?.name}</h1>
      </header>

      <section className="px-8">
        {isLoading && (
          <div
            id="loading-overlay"
            class="fixed inset-0 z-50 flex items-center justify-center bg-mainBg bg-opacity-60"
          >
            <svg
              class="animate-spin h-8 w-8 text-white mr-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>

            <span class="text-white text-3xl font-bold">Loading...</span>
          </div>
        )}

        <div className="grid grid-cols-5 p-4 gap-x-6 gap-y-7 overflow-auto">
          {isLoading && (
            <div
              id="loading-overlay"
              class="fixed inset-0 z-50 flex items-center justify-center bg-mainBg bg-opacity-60"
            >
              <svg
                class="animate-spin h-8 w-8 text-white mr-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>

              <span class="text-white text-3xl font-bold">Loading...</span>
            </div>
          )}

          {error && <div className="text-white text-xl">{error}</div>}

          {genre?.musics.map((music) => (
            <div
              className=" bg-hoverColor p-4 rounded hover:bg-dropDown group"
              key={music.id}
            >
              <div className="pt-[100%] relative mb-4">
                <img
                  src={`https://localhost:44365/Images/${music?.musicPhotoUrl}`}
                  className={`absolute inset-0 w-full h-full`}
                />
                <button
                  className={`w-12 h-12 rounded-full bg-greenPlay absolute bottom-1 right-1 group-hover:flex group-focus:flex ease-out duration-300 items-center justify-center 
                  ${!isCurrentItem ? "hidden" : "flex"}`}
                  onClick={() => {
                    dispacth(setData(music));
                    dispacth(setPlaying(true));
                  }}
                >
                  <Icon name={isCurrentItem && playing ? "pause" : "play"} />
                </button>
              </div>
              <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold text-white">
                {music.musicName}
              </h6>
              <div className="hover:underline">{music?.artistName}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
