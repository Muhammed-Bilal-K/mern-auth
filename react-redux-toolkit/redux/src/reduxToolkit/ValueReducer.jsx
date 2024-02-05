import { createAction, createSlice } from "@reduxjs/toolkit";
const logout = createAction('logout');

const valueSlice = createSlice({
  name: "value",
  initialState: 0,
  reducers: {
    increment: (state, action) => {
        return state + 1
    },
    decrement: (state, action) => {
        return state - 1
    },
  },
  extraReducers : (build) => {
    build.addCase(logout,(state,action) =>{
        return state = 0
    })
  }
});

export const { increment , decrement} = valueSlice.actions

export default valueSlice.reducer;