import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../Icons";
import { setSidebar } from "../../redux/slices/player";

export default function SidebarCover() {
  const data = useSelector((state) => state.player.data);
  const dispatch = useDispatch();

  return (
    <div className=" pt-[100%] bg-mainBg relative group">
      <img
        src={`https://localhost:44365/Images/${data.musicPhotoUrl}`}
        className=" w-full h-full object-cover absolute top-0 left-0"
        alt=""
      />
      <button
        onClick={() => dispatch(setSidebar(false))}
        className="w-6 h-6 bg-footer opacity-0 group-hover:opacity-80 hover:!opacity-100 hover:scale-[1.06] flex items-center -rotate-90 rounded-full absolute top-1 right-1.5 justify-center"
      >
        <Icon name="arrowLeft" />
      </button>
    </div>
  );
}
