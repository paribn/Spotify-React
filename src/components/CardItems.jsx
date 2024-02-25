import React, { useEffect, useState } from "react";
import SongItem from "./SongItem";
import Title from "./Title";

export default function CardItems({ title }) {
  const [music, setMusic] = useState([]);

  const [isMore, setIsMore] = useState(false);
  useEffect(() => {
    if (isMore) {
      fetch(`${process.env.REACT_APP_API}/Artist`)
        .then((x) => x.json())
        .then((x) => setMusic(x));
    } else {
      fetch(`${process.env.REACT_APP_API}/Artist?page=1&&perPage=5`)
        .then((x) => x.json())
        .then((x) => setMusic(x));
    }
  }, [isMore]);

  return (
    <>
      <section>
        <Title
          title={title}
          more={isMore}
          onClick={() => {
            setIsMore((prev) => !prev);
          }}
        />

        <div className="grid grid-cols-5 p-4 gap-x-6 overflow-auto">
          {music.map((x) => {
            return (
              <SongItem
                key={x.id}
                id={x.id}
                name={x.name}
                artistType={x.artistType ? "Band" : "Artist"}
                photoPath={x.artistPhotos[0].photoPath}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
