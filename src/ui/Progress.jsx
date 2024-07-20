import { useSelector } from "react-redux";

const AVAILABLE_TRIES = 8;
function Progress() {
  const tries = useSelector((store) => store.game.tries);
  const widthPercentage = ((AVAILABLE_TRIES - tries) / AVAILABLE_TRIES) * 90;

  return (
    <div className=" bg-white rounded-full flex justify-center items-center relative p-[2px] w-14 h-3 sm:w-40 sm:h-5 sm:p-1">
      <span
        className={`block bg-violet-950 origin-left absolute left-[3px] rounded-full h-2 sm:left-2 sm:h-3 `}
        style={{ width: `${widthPercentage}%` }}
      ></span>
    </div>
  );
}

export default Progress;
