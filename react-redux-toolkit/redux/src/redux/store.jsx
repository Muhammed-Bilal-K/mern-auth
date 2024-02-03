import { createStore, combineReducers } from "redux";

const initial = {
  value: 0,
  showData: false,
};

// const appReducer = (preState, action) => {
//   switch (action.type) {
//     case "valueChange":
//       return {
//         ...preState,
//         value: preState.value + action.payload,
//       };
//     case "show-label":
//       return {
//         ...preState,
//         showData: action.payload,
//       };
//     default:
//       return preState;
//   }
// };

const appReducer = combineReducers({
  value: valueReducer,
  showData: showla,
});

//egane combine reducer work avunath thaze and oringianl mollil
// const appReducer = (preState, action) => {
//   return {
//     value: valueReducer(preState.value, action),
//     showData: showla(preState.showData, action),
//   };
// };

function showla(preState = initial.showData, action) {
  switch (action.type) {
    case "show-label":
      return action.payload;
    default:
      return preState;
  }
}

function valueReducer(preState = initial.value, action) {
  switch (action.type) {
    case "valueChange":
      return preState + action.payload;
    default:
      return preState;
  }
}

function increment() {
  return {
    type: "valueChange",
    payload: 1,
  };
}

const store = createStore(appReducer, initial);

export default store;
export {
    increment,
}
