import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  categoryData: [],
  randomWord: "",

  loser: false,
};

const gameSlice = createSlice({
  name: "gameSlice",
  initialState,
  reducers: {
    pickedCategory: {
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
  },
});

export default gameSlice.reducer;
export const { pickedCategory, toggleLoser } = gameSlice.actions;
