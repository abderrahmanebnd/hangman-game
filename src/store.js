import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./slices/game";
const store = configureStore({
  reducer: {
    game: gameSlice,
  },
});

export default store;
