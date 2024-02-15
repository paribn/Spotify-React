import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SongItem from "./SongItem";
import Title from "./Title";

export default function CardItems({ title, more = false }) {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    fetch("https://localhost:44365/api/Music")
      .then((x) => x.json())
      .then((x) => setMusic(x));
  }, []);

  return (
    <>
      <section>
        <Title title={title} more={more} />

        <div className="grid grid-cols-5 p-4 gap-x-6 overflow-auto">
          {music.map((x) => {
            return (
              <SongItem
                key={x.id}
                id={x.id}
                artistname={x.artistname}
                artistType={x.artistType}
                photoUrl={x.photoUrl}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
