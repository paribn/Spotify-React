import React from "react";
import CardItems from "../CardItems";

export default function Home() {
  const items = [
    {
      id: 1,
      title:
        "Queen mixssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
      desc: "viral trend",
      artistName: "Queen",
      img: "https://seed-mix-image.spotifycdn.com/v6/img/artist/1dfeR4HaWDbWqFHLkxsg1d/en/default",
      type: "album",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      id: 2,
      title: "Queen mix",
      artistName: "MFO",

      desc: "viral trend",
      img: "https://images.unsplash.com/photo-1707499929621-8e55b938aeb7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
    {
      id: 3,
      title: "Queen mix",
      desc: "viral trend",
      artistName: "Pari",

      img: "https://seed-mix-image.spotifycdn.com/v6/img/artist/1dfeR4HaWDbWqFHLkxsg1d/en/default",
      type: "artist",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
    {
      id: 4,
      title: "MFO",
      desc: "Artist",
      artistName: "Niyazi",

      img: "https://i.scdn.co/image/ab67616d00001e029ee0dd0ae7e5c49101c99ef4",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      type: "artist",
    },
    {
      id: 5,
      title: "Queen mix",
      desc: "viral trend",
      artistName: "Ali",

      img: "https://seed-mix-image.spotifycdn.com/v6/img/artist/1dfeR4HaWDbWqFHLkxsg1d/en/default",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    },
  ];

  return (
    <>
      <div className="grid gap-y-6">
        <CardItems title="Recently played" items={items} />
        <CardItems title="Try something else" items={items} />
        <CardItems title="More like" items={items} />
      </div>
    </>
  );
}
