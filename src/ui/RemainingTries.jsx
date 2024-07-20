import { useState } from "react";
import Progress from "./Progress";
const AVAILABLE_TRIES = 8;

function RemainingTries() {
  const [tries, setTries] = useState(AVAILABLE_TRIES);
  const widthPercentage = (tries / AVAILABLE_TRIES) * 90;
  return (
    <div className="flex items-center gap-2 sm:gap-4">
      <Progress widthPercentage={widthPercentage} />
      <img
        className="w-6 sm:w-10"
        src="/assets/images/icon-heart.svg"
        alt="heart"
      />
    </div>
  );
}

export default RemainingTries;
