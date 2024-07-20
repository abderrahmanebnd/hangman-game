import { useSelector } from "react-redux";

function WordLetters() {
  const { randomWord, guessedLetters } = useSelector((store) => store.game);

  const displayWord = randomWord.split("");

  return (
    <ul className="container m-auto flex justify-center items-center gap-1 px-10 flex-wrap">
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
            {guessedLetters.includes(letter) ? letter : ""}
          </li>
        );
      })}
    </ul>
  );
}

export default WordLetters;
