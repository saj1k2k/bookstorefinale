import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";
import oneBookReducer from "./oneBookSlice";
import sidebarReducer from "./sidebarSlice";


export const store = configureStore({
    reducer: {
        books: booksReducer,
        oneBook: oneBookReducer,
        sidebar: sidebarReducer
      },
})