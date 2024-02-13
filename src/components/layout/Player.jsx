import { Icon } from "../Icons";
import { useAudio } from "react-use";
import { secondsToTime } from "./Utilis";
import CustomRange from "./Range";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setControls } from "../../stores/player";

export default function Player() {
  const dispatch = useDispatch();
  const { current } = useSelector((state) => state.player);

  const [audio, state, controls, ref] = useAudio({
    src: current?.src,
  });

  useEffect(() => {
    controls.play();
  }, [current]);

  const volumeIcon = useMemo(() => {
    if (state.volume == 0 || state.muted) return "volumeMuted";
    if (state.volume > 0 && state.volume < 0.33) return "volumeLow";
    if (state.volume > 0.33 && state.volume < 0.66) return "volumeNormal";
    return "volumeFull";
  }, [state.volume, state.muted]);
  return (
    <>
      <div className="flex justify-between px-4 items-center h-full">
        <div className="min-w-[11.25rem] w-[30%] flex items-center">
          {current && (
            <div className="flex items-center">
              <div className="w-14 h-14">
                <img src={current?.img} alt="imgg" />
              </div>
            </div>
          )}
        </div>
        <div className=" max-w-[45.125rem] w-[40%] flex flex-col px-4 items-center">
          <div className="flex items-center gap-x-2 ">
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 ">
              <Icon name="shuffle" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center  text-white text-opacity-70 hover:text-opacity-100">
              <Icon name="playerPrev" />
            </button>
            <button
              onClick={controls[state?.playing ? "pause" : "play"]}
              className="w-8 h-8 flex bg-white rounded-full hover:scale-[1.06] items-center justify-center  text-white text-opacity-70 hover:text-opacity-100"
            >
              <Icon name={state?.playing ? "pause" : "play"} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 ">
              <Icon name="playerNext" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center  text-white text-opacity-70 hover:text-opacity-100">
              <Icon name="repeat" />
            </button>
          </div>
          <div className="w-full flex items-center mt-1.5 gap-x-2">
            {audio}
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
        </div>
        <div className="min-w-[11.25rem] w-[30%] flex justify-end">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="lyrics" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="queue" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="device" />
          </button>
          <button
            onClick={controls[state.muted ? "unmute " : "mute"]}
            className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
          >
            <Icon name={volumeIcon} />
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

          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="fullScreen" />
          </button>
        </div>
      </div>
    </>
  );
}
