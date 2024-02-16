import React from "react";
import CardItems from "../CardItems";

export default function Home() {
  const items = [
    {
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
    {
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
  ];

  return (
    <>
      <div className="grid gap-y-6">
        <CardItems title="Recently played" more="/blabla" />
        {/* <CardItems title="Try something else"  more="/blabla" /> */}
        {/* <CardItems title="More like" items={items} more="/blabla" /> */}
      </div>
    </>
  );
}
