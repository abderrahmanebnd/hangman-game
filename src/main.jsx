import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store.js";
import { LazyMotion } from "framer-motion";

const loadFeatures = () => import("./features.js").then((res) => res.default);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <LazyMotion features={loadFeatures}>
      <App />
    </LazyMotion>
  </Provider>
);
