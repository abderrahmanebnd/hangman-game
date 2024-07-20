import { useSelector } from "react-redux";
import { addRandomLetters } from "../utils/helpers";

function RandomLetters() {
  const { randomWord } = useSelector((store) => store.game);
  console.log(randomWord);
  console.log(addRandomLetters(randomWord));
  return <div></div>;
}

export default RandomLetters;
