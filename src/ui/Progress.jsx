import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoser } from "../slices/game";

const AVAILABLE_TRIES = 8;
function Progress() {
  const dispatch = useDispatch();
  const tries = useSelector((store) => store.game.tries);
  const widthPercentage = ((AVAILABLE_TRIES - tries) / AVAILABLE_TRIES) * 90;

  useEffect(
    function () {
      if (tries === AVAILABLE_TRIES) {
        dispatch(toggleLoser());
        const audio = new Audio("/assets/audio/user-lost.wav");
        audio.play();
      }
    },
    [tries, dispatch]
  );
  return (
    <div className=" bg-white rounded-full flex justify-center items-center relative p-[2px] w-14 h-3 sm:w-40 sm:h-5 sm:p-1">
      <span
        className={`block bg-violet-950 origin-left absolute left-[3px] rounded-full h-2 sm:left-2 sm:h-3  `}
        style={{ width: `${widthPercentage}%` }}
      ></span>
    </div>
  );
}

export default Progress;
