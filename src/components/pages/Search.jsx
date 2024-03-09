import React, { useEffect, useState } from "react";
import Title from "../Title";
import Category from "./Category";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Icon } from "../Icons";
import { useHover } from "react-use";

export default function Search({ title, more = false }) {
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
  const [isMore, setIsMore] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (isMore) {
        fetch(`${process.env.REACT_APP_API}/Genre`)
          .then((response) => {
            if (!response.ok) {
              throw Error("Could not fetch the data for that resource");
            }
            return response.json();
          })
          .then((data) => {
            setGenre(data);
            setLoading(false);
            setError(null);
          })
          .catch((error) => {
            setLoading(false);
            setError(error.message);
          });
      } else {
        fetch(`${process.env.REACT_APP_API}/Genre?page=1&perPage=10`)
          .then((response) => {
            if (!response.ok) {
              throw Error("Could not fetch the data for that resource");
            }
            return response.json();
          })
          .then((data) => {
            setGenre(data);
            setLoading(false);
            setError(null);
          })
          .catch((error) => {
            setLoading(false);
            setError(error.message);
          });
      }
    }, 1000);
  }, [isMore]);

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
        <Title
          title="Browse all"
          more={isMore}
          onClick={() => {
            setIsMore((prev) => !prev);
          }}
        />

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
        {data.length > 0 &&
          data.map((song) => (
            <>
              <div className=" grid grid-cols-6 gap-[1.5rem]">
                <div
                  key={song.id}
                  onClick={() =>
                    navigate(`/cardDetails/${song.id}?isPlaylist=0`)
                  }
                  className="w-[21.375rem] h-[13.375rem] bg-active hover:bg-search p-4 rounded-xl col-span-2"
                >
                  {song &&
                    song.artistPhotos &&
                    song.artistPhotos.length > 0 && (
                      <img
                        className="rounded-full w-[5.75rem] h-[5.75rem]"
                        src={`https://localhost:44365/Images/${song.artistPhotos[0].photoPath}`}
                      />
                    )}

                  <div>
                    <p className="text-white text-2xl font-semibold ">
                      {song.name}
                    </p>
                    <span className="text-sm ">
                      {song.artistType ? "Band" : "Artist"}
                    </span>
                  </div>
                </div>
                <div className="col-span-3">
                  <div
                    className="flex justify-between w-[48rem] h-14 items-center hover:bg-search p-2 rounded-sm"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                  >
                    <div className="flex items-center gap-2">
                      {/* <img
                      className="w-10 h-10"
                      src={`https://localhost:44365/Images/${song.photoUrl}`}
                    /> */}
                      <div>
                        <p className="text-white font-semibold text-xl hover:underline">
                          {song.music.name}
                        </p>
                        {/* <span className="text-sm">{music.name}</span> */}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button>
                        {hover ? <Icon name="heartFilled" /> : null}
                      </button>
                      <span>duration</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
      </section>
    </>
  );
}
