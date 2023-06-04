import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";
import oneBookReducer from "./oneBookSlice";

export const store = configureStore({
    reducer: {
        books: booksReducer,
        oneBook: oneBookReducer
      },
})