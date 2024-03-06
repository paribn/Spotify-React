import React, { useEffect, useState } from "react";
import SongItem from "./SongItem";
import Title from "./Title";

export default function CardItems({ title }) {
  const [music, setMusic] = useState([]);
  const [isMore, setIsMore] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (isMore) {
        fetch(`${process.env.REACT_APP_API}/Artist`)
          .then((x) => {
            if (!x.ok) {
              throw Error("Could not fetch data for that resourse");
            }
            return x.json();
          })
          .then((x) => setMusic(x));
        setLoading(false);
        setError(null);
      } else {
        fetch(`${process.env.REACT_APP_API}/Artist?page=1&&perPage=10`)
          .then((x) => {
            if (!x.ok) {
              throw Error("Could not fetch data for that resource");
            }
            return x.json();
          })
          .then((x) => {
            setMusic(x);
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            setError(err.message);
          });
      }
    }, 1000);
  }, [isMore]);

  return (
    <>
      <section className="px-8">
        <Title
          title={title}
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
        {error && <div>{error}</div>}
        {music == null && error != null && <h1> failed</h1>}
        <div className="grid grid-cols-5 p-4 gap-x-6 gap-y-7 overflow-auto">
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
