import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Icon } from "./Icons";
import { secondsToTime } from "./layout/Utilis";
import CustomRange from "./layout/Range";

export default function FullScreenPlayer({
  toggle,
  state,
  controls,
  volumeIcon,
}) {
  const { data } = useSelector((state) => state.player);

  return (
    <div
      className=" h-full relative"
      onClick={controls[state?.playing ? "pause" : "play"]}
    >
      <div
        className="absolute inset-0 object-cover bg-center bg-cover blur-md opacity-30"
        style={{
          backgroundImage: `url(https://localhost:44365/Images/${data?.musicPhotoUrl})`,
        }}
      ></div>

      <div className="absolute top-14 left-8 opacity-70 gap-x-4 text-white flex items-center">
        <Icon size={34} name="logo" />
        <div className="text-sm">
          <p>PLAYING FROM PLAYLIST</p>
          <h6 className="font-semibold mt-1">{data?.albumName}</h6>
        </div>
      </div>
      <div className=" absolute bottom-36 left-8 flex items-center gap-x-4">
        <img
          src={`https://localhost:44365/Images/${data?.musicPhotoUrl}`}
          className="w-24 h-24 object-cover "
        />
        <div>
          <h3 className="text-white text-3xl font-semibold">
            {data && data?.musicName}
          </h3>
          {/* <span>{data?.artistName}</span> */}
        </div>
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className=" w-full absolute bottom-4 flex flex-col px-8 items-center"
      >
        <div className="w-full flex items-center mb-1.5 gap-x-2">
          <div className="text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.time)}
          </div>
          <CustomRange
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={(value) => controls.seek(value)}
          />
          <div className="text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.duration)}
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div></div>
          <div className="flex items-center gap-x-5  mx-auto">
            <button
              onClick={(e) => {
                e.stopPropagation();
                controls[state?.playing ? "pause" : "play"]();
              }}
              className="w-16 h-16 bg-white flex items-center justify-center text-black rounded-full hover:scale-[1.06]"
            >
              <Icon size={24} name={state?.playing ? "pause" : "play"} />
            </button>
          </div>
          <div className="flex items-center absolute bottom-3 right-6 gap-x-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                controls[state.muted ? "unmute" : "mute"]();
              }}
              className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
            >
              <Icon size={16} name={volumeIcon} />
            </button>
            <div className="w-[5.813rem] max-w-full">
              <CustomRange
                step={0.01}
                min={0}
                max={1}
                value={state.muted ? 0 : state?.volume}
                onChange={(value) => {
                  controls.unmute();
                  controls.volume(value);
                }}
              />
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggle();
              }}
              className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
            >
              <Icon size={24} name="fullScreenOff" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
