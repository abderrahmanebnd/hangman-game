import { useSelector } from "react-redux";
import MenuOptions from "./MenuOptions";
import RemainingTries from "./RemainingTries";

function HeaderGame() {
  const { category } = useSelector((store) => store.game);
  return (
    <header className="px-5 py-7 flex justify-between sm:px-20 sm:py-16 container m-auto">
      <div className="flex items-center gap-2 sm:gap-4">
        <MenuOptions />
        <h1 className="tracking-wider text-2xl uppercase text-white sm:text-5xl ">
          {category}
        </h1>
      </div>
      <RemainingTries />
    </header>
  );
}

export default HeaderGame;
