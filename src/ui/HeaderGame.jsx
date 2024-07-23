import { useSelector } from "react-redux";
import MenuOptions from "./MenuOptions";
import RemainingTries from "./RemainingTries";
import { m } from "framer-motion";
function HeaderGame() {
  const category = useSelector((store) => store.game.category);
  return (
    <header className="px-5 py-7 flex justify-between sm:px-20 sm:py-16 container m-auto flex-wrap">
      <div className="flex items-center gap-2 sm:gap-4">
        <MenuOptions />
        <m.h1
          className="tracking-wider text-2xl uppercase text-white sm:text-5xl "
          initial={{
            x: "-100vw",
          }}
          animate={{
            x: 0,
          }}
          transition={{
            type: "spring",
            duration: 0.7,
          }}
        >
          {category}
        </m.h1>
      </div>
      <RemainingTries />
    </header>
  );
}

export default HeaderGame;
