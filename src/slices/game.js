import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
};

const gameSlice = createSlice({
  name: "gameSlice",
  initialState,
  reducers: {
    pickedCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export default gameSlice.reducer;
export const { pickedCategory } = gameSlice.actions;
