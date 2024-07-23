import { useDispatch, useSelector } from "react-redux";
import { addTry, guessLetter } from "../slices/game";
import { m } from "framer-motion";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};
function RandomLetters({ randomLetters }) {
  const dispatch = useDispatch();
  const guessedLetters = useSelector((store) => store.game.guessedLetters);
  const randomWord = useSelector((store) => store.game.randomWord);
  const loser = useSelector((store) => store.game.loser);
  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter)) {
      dispatch(guessLetter(letter));
    }
    if (!randomWord.includes(letter)) {
      dispatch(addTry());
      const audio = new Audio("/assets/audio/invalid.mp3");
      audio.play();
    } else {
      if (!loser) {
        const audio = new Audio("/assets/audio/valid.wav");
        audio.play();
      }
    }
  };

  return (
    <m.div
      className="w-fit m-auto grid grid-cols-8 items-center mt-10 gap-2 md:gap-3 xl:gap-5"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {randomLetters.map((letter, index) => (
        <m.button
          key={index}
          variants={item}
          onClick={() => handleGuess(letter)}
          className={`px-2 text-2xl md:text-4xl md:px-4 md:py-3 xl:text-6xl xl:px-8 xl:py-4 bg-white shadow-md uppercase rounded-xl text-center transition-colors duration-200 ${
            guessedLetters.includes(letter)
              ? "bg-gray-700 text-gray-300 opacity-60 cursor-not-allowed"
              : "hover:bg-clr-bg hover:text-white text-purple-950"
          }`}
          disabled={guessedLetters.includes(letter)}
        >
          {letter}
        </m.button>
      ))}
    </m.div>
  );
}

export default RandomLetters;
