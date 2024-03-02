import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

export default function CategoryDetails() {
  const [genre, setGenre] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getGenre = async () => {
      const result = await fetch(
        `${process.env.REACT_APP_API}/Genre/${params.id}`
      );
      const data = await result.json();
      console.log("result", result);
      setGenre(data);
    };
    getGenre();
  }, []);

  return (
    <>
      <header className="w-[70rem] h-[15.625rem] bg-slate-500 flex justify-start items-end  p-4">
        <h1 className="text-[6rem] font-bold text-white">{genre?.name}</h1>
      </header>

      <section>
        <div className="grid grid-cols-5 p-4 gap-x-6 gap-y-7 overflow-auto">
          {(genre?.musics || []).map((music) => (
            <div
              className=" bg-hoverColor p-4 rounded hover:bg-dropDown group"
              key={music.id}
              onClick={() => navigate(`/cardDetails/${music.id}?isPlaylist=0`)}
            >
              <div className="pt-[100%] relative mb-4">
                <img
                  src={`https://localhost:44365/Images/${music?.photoUrl}`}
                  className={`absolute inset-0 w-full h-full`}
                />
                <button
                  className={`w-12 h-12 rounded-full bg-greenPlay absolute bottom-1 right-1 group-hover:flex group-focus:flex ease-out duration-300 items-center justify-center`}
                ></button>
              </div>
              <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold text-white">
                {music.name}
              </h6>
              <NavLink
                to={`/cardDetails/${music.id}?isPlaylist=0`}
                className="hover:underline"
              >
                {
                  genre?.artists.find((artist) => artist.id === music.artistId)
                    ?.name
                }
              </NavLink>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
