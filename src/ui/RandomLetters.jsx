// import { useDispatch, useSelector } from "react-redux";
// import { guessLetter } from "../slices/game";

// function RandomLetters({ randomLetters }) {
//   const dispatch = useDispatch();
//   const { guessedLetters } = useSelector((store) => store.game);

//   const handleGuess = (letter) => {
//     if (!guessedLetters.includes(letter)) {
//       dispatch(guessLetter(letter));
//     }
//   };

//   return (
//     <div className="w-fit m-auto grid grid-cols-8  items-center mt-10 gap-2 md:gap-3  ">
//       {randomLetters.map((letter, index) => (
//         <button
//           key={index}
//           onClick={() => handleGuess(letter)}
//           className=" px-2 text-2xl  md:text-4xl md:px-4 md:py-3 bg-white hover:bg-clr-bg shadow-md hover:text-white text-purple-950  transition-colors duration-200 uppercase rounded-xl text-center"
//           disabled={true}
//         >
//           {letter}
//         </button>
//       ))}
//     </div>
//   );
// }

// export default RandomLetters;

import { useDispatch, useSelector } from "react-redux";
import { guessLetter } from "../slices/game";

function RandomLetters({ randomLetters }) {
  const dispatch = useDispatch();
  const { guessedLetters } = useSelector((store) => store.game);

  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter)) {
      dispatch(guessLetter(letter));
    }
  };

  return (
    <div className="w-fit m-auto grid grid-cols-8 items-center mt-10 gap-2 md:gap-3 xl:gap-5">
      {randomLetters.map((letter, index) => (
        <button
          key={index}
          onClick={() => handleGuess(letter)}
          className={`px-2 text-2xl md:text-4xl md:px-4 md:py-3 xl:text-6xl xl:px-8 xl:py-4 bg-white shadow-md uppercase rounded-xl text-center transition-colors duration-200 ${
            guessedLetters.includes(letter)
              ? "bg-gray-700 text-gray-300 opacity-60 cursor-not-allowed"
              : "hover:bg-clr-bg hover:text-white text-purple-950"
          }`}
          disabled={guessedLetters.includes(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}

export default RandomLetters;
