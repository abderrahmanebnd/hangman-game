import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWinner } from "../slices/game";
import { m, AnimatePresence } from "framer-motion";

const letterVar = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function WordLetters() {
  const { randomWord, guessedLetters } = useSelector((store) => store.game);
  const dispatch = useDispatch();
  const displayWord = randomWord.split("");
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleUserInteraction = () => {
      setHasInteracted(true);
    };

    window.addEventListener("click", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  useEffect(() => {
    const allGuessed = displayWord?.every(
      (letter) => letter === " " || guessedLetters.includes(letter)
    );

    if (allGuessed) {
      dispatch(setWinner());
      if (hasInteracted) {
        const audio = new Audio("/assets/audio/user-won.mp3");
        audio.play();
      }
    }
  }, [guessedLetters, dispatch, displayWord, hasInteracted]);

  return (
    <m.ul
      className="container m-auto flex justify-center items-center gap-1 px-10 flex-wrap"
      initial={{
        y: -20,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        delay: 0.3,
      }}
    >
      {displayWord.map((letter, index) => {
        return (
          <li
            key={index}
            className={`w-8 h-12 text-2xl md:w-10 md:h-14 md:text-3xl xl:w-20 xl:h-16 xl:text-5xl  text-white uppercase rounded-full py-2 text-center ${
              letter === " "
                ? "bg-transparent"
                : "bg-clr-bg shadow-primary-shadow"
            } ${
              guessedLetters.includes(letter) ? "opacity-100" : "opacity-60"
            }`}
          >
            <AnimatePresence>
              {guessedLetters.includes(letter) && (
                <m.span
                  key={letter + index} // Ensure unique key
                  variants={letterVar}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                >
                  {letter}
                </m.span>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </m.ul>
  );
}

export default WordLetters;
