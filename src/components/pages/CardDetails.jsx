import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Songs from "./Songs";

export default function CardDetails() {
  const [music, setMusic] = useState(null);
  const params = useParams();
  const [searchParams] = useSearchParams();
  const [isPlaylist, setIsPlaylist] = useState(
    !!parseInt(searchParams.get("isPlaylist"))
  );

  useEffect(() => {
    const getMusic = async () => {
      const category = isPlaylist ? "Album" : "Artist";
      const result = await fetch(
        `https://localhost:44365/api/${category}/${params.id}`
      );
      const data = await result.json();
      setMusic(data);
    };
    if (params.id) {
      getMusic();
    }
  }, [params.id]);

  console.log("music ", music);
  if (!music) return;

  return (
    <>
      {/* <header className="top-0 h-20 z-10 sticky text-4xl flex item font-semibold ">
        <div className="bg-blue-800">
          <div>{music?.artistname}</div>
        </div>
      </header> */}
      <section className="flex items-end space-x-7 bg-gradient-to-b">
        <img
          className="h-44 w-44 "
          style={{ objectFit: "cover" }}
          src={
            isPlaylist
              ? `https://localhost:44365/Images/${music?.coverImage}`
              : `https://localhost:44365/Images/${
                  music?.artistPhotos[music?.artistPhotos.length - 1].photoPath
                }`
          }
        />
        <div>
          <p className="text-sm font-bold">
            {isPlaylist ? "Playlist" : "Artist"}
          </p>
          <h1 className="text-3xl font-extrabold text-white">
            {isPlaylist ? music?.title : music?.name}
          </h1>
        </div>
      </section>
      <div style={{ height: "40px" }}></div>
      <div className="text-white px-8 flex flex-col space-y-1 pb-28">
        {music.musicGet.map((music, index) => (
          <Songs
            number={index + 1}
            name={music.musicName}
            music={music}
            imgSrc={`https://localhost:44365/Images/${music?.musicPhotoUrl}`}
            // musicUrl={`https://localhost:44365/mp3${music?.musicUrl}`}
          />
        ))}
      </div>
    </>
  );
}
