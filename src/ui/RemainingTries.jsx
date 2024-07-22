import Progress from "./Progress";

function RemainingTries() {
  return (
    <div className="flex items-center gap-2 sm:gap-4">
      <Progress />
      <img
        className="w-6 sm:w-10"
        src="/assets/images/icon-heart.svg"
        alt="heart"
        width="32"
        height="32"
      />
    </div>
  );
}

export default RemainingTries;
