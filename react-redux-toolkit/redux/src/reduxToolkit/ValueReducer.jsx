import { createAction, createSlice } from "@reduxjs/toolkit";
const logout = createAction("logout");

const initialState = {
  value: 0,
  todo:[]
};

const valueSlice = createSlice({
  name: "value",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      state.value -= 1;
    },
  },
  extraReducers: (build) => {
    build.addCase(logout, (state, action) => {
      state.value = 0;
    });
  },
});


export const { increment, decrement } = valueSlice.actions;

export default valueSlice.reducer;

// const valueSlice = createSlice({
//   name: "value",
//   initialState : 0,
//   reducers: {
//     increment: (state, action) => {
//       return state + 1;
//     },
//     decrement: (state, action) => {
//       return state - 1;
//     },
//   },
//   extraReducers: (build) => {
//     build.addCase(logout, (state, action) => {
//       return state = 0;
//     });
//   },
// });


// reducers: {
//   increment: (state, action) => {
//     state.value = action.payload;
//   },
//   decrement: (state, action) => {
//     state.value = action.payload;
//   },
// },

// const valueSlice = createSlice({
//   name: "value",
//   initialState : 0,
//   reducers: {
//     increment: (state, action) => {
//       return state + 1;
//     },
//     decrement: (state, action) => {
//       return state - 1;
//     },
//   },
//   extraReducers: (build) => {
//     build.addCase(logout, (state, action) => {
//       return state = 0;
//     });
//   },
// });