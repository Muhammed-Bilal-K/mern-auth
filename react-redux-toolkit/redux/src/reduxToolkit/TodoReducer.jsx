import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.todo.push(action.payload);
    },
    deleteData: (state, action) => {
      state.todo = state.todo.filter(
        (current, index) => index != action.payload
      );
    },
  },
});

export const { addData, deleteData } = TodoSlice.actions;

export default TodoSlice.reducer;
