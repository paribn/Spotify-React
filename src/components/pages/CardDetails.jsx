import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Songs from "./Songs";
import { Icon } from "../Icons";

export default function CardDetails() {
  const [music, setMusic] = useState(null);
  const params = useParams();
  const [isMore, setIsMore] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const [isPlaylist, setIsPlaylist] = useState(
    !!parseInt(searchParams.get("isPlaylist"))
  );

  useEffect(() => {
    setTimeout(() => {
      const category = isPlaylist ? "Album" : "Artist";

      fetch(`https://localhost:44365/api/${category}/${params.id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          setLoading(false);
          setError(null);
          return response.json();
        })
        .then((data) => {
          setMusic(data);
          setLoading(false);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
        });
    });
  }, [params.id]);

  if (!music) return;

  return (
    <>
      {isLoading ? (
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
      ) : (
        <>
          {error && <div>{error}</div>}
          {music == null && error != null && <h1> failed</h1>}
          <section className="flex items-end space-x-7 bg-gradient-to-b px-8 ">
            <img
              className="h-44 w-44 "
              style={{ objectFit: "cover" }}
              src={
                isPlaylist
                  ? `https://localhost:44365/Images/${music?.coverImage}`
                  : `https://localhost:44365/Images/${
                      music?.artistPhotos[music?.artistPhotos.length - 1]
                        .photoPath
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
          <section className="px-8">
            <h2 className="text-xl text-white  font-bold">Popular</h2>
            <div className="text-white flex flex-col space-y-1 mb-12 w-[66.159rem] h-full overflow-auto no-scrollbar">
              {music.musicGet
                .slice(0, isMore ? music.musicGet.length : 3)
                .map((music, index) => (
                  <Songs
                    number={index + 1}
                    name={music.musicName}
                    music={music}
                    imgSrc={`https://localhost:44365/Images/${music?.musicPhotoUrl}`}
                  />
                ))}
              <div>
                <button
                  onClick={() => setIsMore(!isMore)}
                  className="text-xs text-textColor hover:text-white font-semibold p-4"
                >
                  {isMore ? "Show Less" : "See More"}
                </button>
              </div>
            </div>

            {/* aboutt */}
            <div>
              <div className="grid grid-cols-4 w-[54.45rem] h-[17.363rem] gap-4">
                {music.albumGets.map((album, index) => (
                  <>
                    <div className="p-2 py-2 bg-active w-full h-full hover:bg-dropDown duration-300 rounded  ">
                      <img
                        className="w-[10.488rem] h-[10.488rem] ml-2"
                        src={`https://localhost:44365/Images/${album?.coverImage}`}
                      />
                      <div className="ml-2">
                        <p className="text-white font-semibold mt-4">
                          {album.title}
                        </p>
                        <span>Album</span>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <div className="mt-6">
                <span className="text-white text-2xl font-semibold">About</span>
                <div className="relative rounded-xl  w-[800px] mt-4 h-[32.25rem] transition ease-in-out delay-150 hover:duration-300">
                  <img
                    className="w-full h-full"
                    src={`https://localhost:44365/Images/${
                      music?.artistPhotos[music.artistPhotos.length - 2]
                        .photoPath
                    }`}
                  />
                  <div className="absolute inset-0 flex justify-end items-end text-start w-full h-full p-4 bg-black bg-opacity-50 text-white ">
                    {music.about}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
