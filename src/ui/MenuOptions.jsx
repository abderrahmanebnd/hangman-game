import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Button from "./Button";
import CustomText from "./CustomText";
export function Overlay() {
  return (
    <div className="fixed top-0 left-0 w-full min-h-screen bg-black opacity-40 z-10"></div>
  );
}

function MenuOptions() {
  const [show, setShow] = useState(false);

  const loser = useSelector((store) => store.game.loser);
  const navigate = useNavigate();

  function handleShowMenu() {
    setShow((show) => !show);
  }

  function handlepickNewCategory() {
    navigate("/categories");
  }

  function handleQuitGame() {
    navigate("/");
  }

  return (
    <>
      <div
        className=" relative cursor-pointer"
        onClick={() => setShow((show) => !show)}
      >
        <img
          className="w-8 opacity-80  hover:opacity-100 transition-opacity duration-200 sm:w-12"
          src="/assets/images/icon-play-container.svg"
          alt="container"
        />
        <img
          className="absolute w-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-6"
          src="/assets/images/icon-menu.svg"
          alt="options"
        />
      </div>
      {(show || loser) && (
        <>
          <Overlay />
          <div className="playbackgroundStyle fixed min-w-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 scale-75 ">
            <div className="-mt-10 mb-10 md:-mt-20 md:mb-5">
              {show && (
                <img
                  src="/assets/images/heading/mobile-heading.svg"
                  className="m-auto w-3/4  md:w-3/4"
                  alt="logo"
                />
              )}
              {loser && (
                <CustomText textStyle="text-7xl sm:text-9xl  text-center ">
                  You Lose
                </CustomText>
              )}
            </div>

            <div className="space-y-5 translate-y-5">
              {show && <Button onClick={handleShowMenu}>Continue</Button>}
              {loser && <Button>Play Again</Button>}
              <Button onClick={handlepickNewCategory}>New Category</Button>
              <Button onClick={handleQuitGame}>Quit Game</Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default MenuOptions;
