import React, { useEffect, useState } from "react";
import Title from "../Title";
import Category from "./Category";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Icon } from "../Icons";
import { useHover } from "react-use";

export default function Search({
  title,
  more = false,
  id,
  name,
  artistPhoto,
  album,
  artists,
  music = [],
}) {
  const [genre, setGenre] = useState([]);
  const { data } = useSelector((state) => state.filters);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const params = {
    page,
    perPage,
  };

  console.log(data, "dataaa");
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch(`${process.env.REACT_APP_API}/Genre`)
        .then((x) => {
          if (!x.ok) {
            throw Error("Could not fetch the data for that resourse");
          }
          return x.json();
        })
        .then((x) => {
          setGenre(x);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  const colors = [
    "#e91429",
    "#dc148c",
    "#006450",
    "#8400e7",
    "#0d73ec",
    "#148a08",
    "#e41d63",
    "#777777",
    "#d84000",
    "#8d67ab",
    "#e1118c",
  ];

  return (
    <>
      <section className="px-8">
        <Title title="Browse all" />

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

        {error && data.length <= 0 && (
          <div className="text-white text-xl">{error}</div>
        )}

        {data.length <= 0 && (
          <div className="grid grid-cols-5 gap-6">
            {genre.map((x, index) => {
              const color = colors[index % colors.length];
              return (
                <Category
                  key={x.id}
                  id={x.id}
                  name={x.name}
                  color={color}
                  photoPath={x.photoPath}
                />
              );
            })}
          </div>
        )}
      </section>

      <section>
        <div className="flex flex-col gap-8 px-8 h-screen overflow-auto no-scrollbar no-scrollbar::-webkit-scrollbar">
          <div className="grid grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Artists</h2>
              <div className="h-64 pr-8">
                <div
                  // onClick={() => selectPlaylist(playlists[0])}
                  className="cursor-pointer  group h-64 w-full bg-neutral-800 hover:bg-neutral-700 p-4 flex flex-col gap-6 rounded-md transition duration-500"
                >
                  <>
                    {data.map((artist) => {
                      return (
                        <>
                          <img
                            className="h-28 w-28 rounded"
                            src={`https://localhost:44365/Images/${artist?.artistPhoto[0].photoPath}`}
                          />
                          <p className="text-3xl font-bold">
                            {artist.artistname}
                          </p>
                          <p className="text-sm text-neutral-400">
                            {/* {name} */}
                          </p>
                        </>
                      );
                    })}
                  </>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">Top songs</h2>
              <div className="flex flex-col">
                {data.map((song) => {
                  return (
                    <div
                      key={song.id}
                      className="cursor-default w-full h-16 px-4 rounded-md flex items-center gap-4 hover:bg-neutral-700"
                    >
                      <img
                        className="h-10 w-10"
                        src={`https://localhost:44365/Images/${song.photoUrl}`}
                      />
                      <div>
                        <p className="text-white font-semibold">{song.name}</p>
                        <p className="text-sm text-neutral-400">
                          {song.artistname}
                        </p>
                      </div>
                      <div className="flex-grow flex items-center justify-end">
                        duration
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Albums</h2>
            <div className="flex flex-wrap gap-4">
              {data.map((x) => {
                return (
                  <div
                    key={x.album.id}
                    className="cursor-pointer  group w-56 mb-2   bg-neutral-800 hover:bg-neutral-700 p-4"
                  >
                    <img
                      className="w-48 h-48 mb-4 "
                      src={`https://localhost:44365/Images/${x.album.coverImage}`}
                    />
                    <p className="text-base text-white mb-1 w-48 truncate">
                      {x.album.title}
                    </p>
                    <p className="text-sm text-neutral-400 mb-8 w-48 truncate">
                      {x.artistname}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
