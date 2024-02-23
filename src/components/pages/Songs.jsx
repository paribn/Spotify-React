import React from "react";

export default function Songs({ number, name, imgSrc, artist }) {
  return (
    <div className="grid grid-cols-2 text-neutral-400 text-sm py-4 px-5 hover:bg-white hover:bg-opacity-10 rounded-lg cursor-default">
      <div className="flex items-center space-x-4">
        <p>{number}</p>
        <img src={imgSrc} className="h-10 w-10" />
        <div>
          <p className="w-36 lg:w-64 truncate text-white text-base">{name}</p>
          {artist && (
            <p className="w-36 lg:w-64 truncate text-white text-base">
              {artist}
            </p>
          )}
          <p className="w-36 truncate"></p>
        </div>
      </div>
    </div>
  );
}
