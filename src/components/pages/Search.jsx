import React, { useEffect, useState } from "react";
import Title from "../Title";
import Category from "./Category";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Icon } from "../Icons";
import { useHover } from "react-use";

export default function Search({ title, more = false, id }) {
  const [genre, setGenre] = useState([]);
  const { data } = useSelector((state) => state.filters);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const params = {
    page,
    perPage,
  };
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/Genre`)
      .then((x) => x.json())
      .then((x) => setGenre(x));
  }, []);
  const [hover, setHover] = useState(false);

  console.log(genre);
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
    <section>
      <Title title="Browse all" />
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
                onClick={() => navigate(`/cardDetails/${song.id}?isPlaylist=0`)}
                className="w-[21.375rem] h-[13.375rem] bg-active hover:bg-search p-4 rounded-xl col-span-2"
              >
                {song && song.artistPhotos && song.artistPhotos.length > 0 && (
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
  );
}
