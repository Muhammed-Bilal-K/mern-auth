import { combineReducers, createStore } from "redux";

const initial = {
  value: 0,
  todo: [],
};

const valueRed = (preState = initial.value, action) => {
  switch (action.type) {
    case "value_change":
      return preState + action.payload;
    default:
      return preState;
  }
};

const todos = (preState = initial.todo, action) => {
  switch (action.type) {
    case "addData":
      return {
        ...preState,
        todo: [preState.todo, action.payload],
      };
    default:
      return preState;
  }
};

const appReducer = combineReducers({
  value: valueRed,
  todo: todos,
});

const store = createStore(appReducer, initial);

export default store;
