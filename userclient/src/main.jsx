import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <App />
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>
);
