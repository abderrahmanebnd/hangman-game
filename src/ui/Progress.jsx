function Progress({ widthPercentage }) {
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
