import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  categoryData: [],
  randomWord: "",
  guessedLetters: [],
  tries: 0,
  loser: false,
  winner: false, // Add winner state
};

const gameSlice = createSlice({
  name: "gameSlice",
  initialState,
  reducers: {
    startGame: {
      prepare(category, data) {
        const storedCategoryData = localStorage.getItem("selectedCategoryData");
        const selectedData =
          data || (storedCategoryData ? JSON.parse(storedCategoryData) : []);

        const randomIndex = Math.floor(Math.random() * selectedData.length);
        const randomWord = selectedData[randomIndex].name;
        return {
          payload: { category, categoryData: selectedData, randomWord },
        };
      },
      reducer(state, action) {
        const { category, categoryData, randomWord } = action.payload;
        state.category = category;
        state.categoryData = categoryData;
        state.randomWord = randomWord;
        state.guessedLetters = [];
        state.tries = 0;
        state.winner = false;
        state.loser = false;
        localStorage.setItem("selectedCategory", category);
        localStorage.setItem(
          "selectedCategoryData",
          JSON.stringify(categoryData)
        );
      },
    },
    toggleLoser(state) {
      state.loser = !state.loser;
    },
    guessLetter(state, action) {
      state.guessedLetters.push(action.payload);
    },
    addTry(state) {
      state.tries += 1;
    },
    setWinner(state) {
      state.winner = true;
    },
  },
});

export default gameSlice.reducer;
export const { startGame, toggleLoser, guessLetter, addTry, setWinner } =
  gameSlice.actions;
