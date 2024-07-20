import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pickedCategory } from "../slices/game";
import RandomLetters from "./RandomLetters";
import WordLetters from "./WordLetters";
import { addRandomLetters } from "../utils/helpers";

function BodyGame() {
  const dispatch = useDispatch();
  const randomWord = useSelector((state) => state.game.randomWord);
  const category = useSelector((state) => state.game.category);
  const categoryData = useSelector((state) => state.game.categoryData);
  const randomLetters = addRandomLetters(randomWord);

  useEffect(() => {
    // Dispatch pickedCategory action when component mounts to ensure randomWord is generated
    if (!category && categoryData.length === 0) {
      // Fetch category and categoryData from localStorage if not already in Redux state
      const storedCategory = localStorage.getItem("selectedCategory");
      const storedCategoryData = JSON.parse(
        localStorage.getItem("selectedCategoryData")
      );
      if (storedCategory && storedCategoryData) {
        dispatch(pickedCategory(storedCategory, storedCategoryData));
      }
    }
  }, [category, categoryData, dispatch]);

  return (
    <main className="">
      <WordLetters />
      <RandomLetters randomLetters={randomLetters} />
    </main>
  );
}

export default BodyGame;
