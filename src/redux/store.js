import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./reducer";
import filterSlice from "./filterSlice/filterSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
    filter: filterSlice,
  },
});
export { store };
