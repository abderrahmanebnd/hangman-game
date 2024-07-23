import Progress from "./Progress";
import { m } from "framer-motion";

function RemainingTries() {
  return (
    <m.div
      className="flex items-center gap-2 sm:gap-4"
      initial={{
        x: "100vw",
      }}
      animate={{
        x: 0,
      }}
      transition={{
        type: "spring",
        duration: 0.7,
      }}
    >
      <Progress />
      <img
        className="w-6 sm:w-10"
        src="/assets/images/icon-heart.svg"
        alt="heart"
        width="32"
        height="32"
      />
    </m.div>
  );
}

export default RemainingTries;
