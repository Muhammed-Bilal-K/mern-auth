import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
// import App from "./App.jsx";
// import store from "./redux/store.jsx";
import store from "./reduxToolkit/store";
// import store from "./studyredux/store.jsx";
import Count from "./Count.jsx";
import Number from "./studyredux/Number.jsx";
import Datas from "./Data/Datas.jsx";
import Todo from "./Todo.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Provider store={store}>
        <Todo />
      </Provider>
  </React.StrictMode>
);
