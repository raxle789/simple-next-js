import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoReducer";

export const makeStore = () => {
  return configureStore({
    reducer: {
      todo: todoReducer,
    },
  });
};
