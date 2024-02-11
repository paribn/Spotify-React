import React from "react";
import CardItems from "../CardItems";

export default function Home() {
  return (
    <>
      <div className="grid gap-y-6">
        <CardItems title="Recently played" />
        <CardItems title="Try something else" />
        <CardItems title="More like" />
      </div>
    </>
  );
}
