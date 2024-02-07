import { configureStore } from "@reduxjs/toolkit";
import ValueReducer from "./ValueReducer";
import TodoSlice from "./TodoReducer";

const store = configureStore({
  reducer: {
    value: ValueReducer,
    Todo: TodoSlice,
  },
});

export default store;
