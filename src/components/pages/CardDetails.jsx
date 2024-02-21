import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CardDetails() {
  const [music, setMusic] = useState([]);
  const params = useParams();
  useEffect(() => {
    const getMusic = async () => {
      const result = await fetch(
        `https://localhost:44365/api/Music/${params.id}`
      );
      const data = await result.json();
      setMusic([data]);
    };
    getMusic();
  }, [params.id]);
  {
    /* <div>{music.title}</div>; */
  }

  return (
    <>
      {/* <header className="top-0 h-20 z-10 sticky text-4xl flex item font-semibold ">
        <div className="bg-blue-800">
          <div>{music?.artistname}</div>
        </div>
      </header> */}
      <section
        className="flex items-end space-x-7 bg-gradient-to-b 
      "
      >
        <img
          className="h-44 w-44 "
          src={`https://localhost:44365/musicAlbomimg/${music?.photoUrl}`}
        />
        <div>
          <p className="text-sm font-bold">Playlist</p>
          <span className="text-3xl font-extrabold text-white">
            {music?.albumName}
          </span>
        </div>
      </section>

      <div>
        <table className="table-auto mt-10">
          <tbody>
            {music.map((x, index) => (
              <tr key={x.id}>
                <td className="p-8">{index + 1}</td>
                <td>{x.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
