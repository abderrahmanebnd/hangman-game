import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "./common/Button";
import CustomText from "./common/CustomText";
import { startGame } from "../slices/game";
import { m, AnimatePresence } from "framer-motion";

export function Overlay({ children }) {
  return (
    <m.div
      className="flex justify-center items-center fixed top-0 left-0 w-full h-full bg-black bg-opacity-40  z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </m.div>
  );
}

function MenuOptions() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loser = useSelector((store) => store.game.loser);
  const winner = useSelector((store) => store.game.winner);

  function handleShowMenu() {
    setShow((show) => !show);
  }

  function handlePlayAgain() {
    const storedCategory = localStorage.getItem("selectedCategory");
    const storedCategoryData = JSON.parse(
      localStorage.getItem("selectedCategoryData")
    );
    if (storedCategory && storedCategoryData) {
      dispatch(startGame(storedCategory, storedCategoryData));
    }
  }

  function handlePickNewCategory() {
    navigate("/categories", { replace: true });
  }

  function handleQuitGame() {
    navigate("/", { replace: true });
  }

  return (
    <>
      <m.div
        className="relative cursor-pointer"
        onClick={handleShowMenu}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 0.7 }}
      >
        <img
          className="w-8 opacity-80 hover:opacity-100 transition-opacity duration-200 sm:w-12"
          src="/assets/images/icon-play-container.svg"
          alt="container"
          width="8"
          height="8"
        />
        <img
          className="absolute w-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-6"
          src="/assets/images/icon-menu.svg"
          alt="options"
          width="4"
          height="4"
        />
      </m.div>
      <AnimatePresence mode="wait">
        {(show || loser || winner) && (
          <Overlay>
            <m.div
              className="scale-75 min-w-64 playbackgroundStyle"
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "-100vh" }}
              transition={{
                type: "spring",
                stiffness: 120,
                duration: 0.5,
              }}
            >
              <div className="-mt-10 mb-10 md:-mt-20 md:mb-5">
                {show && (
                  <img
                    src="/assets/images/heading/mobile-heading.svg"
                    className="m-auto w-3/4 md:w-3/4"
                    alt="logo"
                    width="200"
                    height="200"
                  />
                )}
                {loser && (
                  <CustomText textStyle="text-7xl sm:text-9xl text-center">
                    You Lose
                  </CustomText>
                )}
                {winner && (
                  <CustomText textStyle="text-7xl sm:text-9xl text-center">
                    You Won
                  </CustomText>
                )}
              </div>

              <div className="space-y-7 xl:space-y-10 translate-y-5 xl:mt-14">
                {show && <Button onClick={handleShowMenu}>Continue</Button>}
                {(loser || winner) && (
                  <Button onClick={handlePlayAgain}>Play Again</Button>
                )}
                <Button onClick={handlePickNewCategory}>New Category</Button>
                <Button
                  onClick={handleQuitGame}
                  customClass="bg-gradient-to-b from-[#FE71FE] via-[#B785FF] to-[#7199FF] shadow-[#FE71FE] shadow active:scale-95"
                >
                  Quit Game
                </Button>
              </div>
            </m.div>
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
}

export default MenuOptions;
