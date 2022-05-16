import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import store from "./store/index";
import { Provider } from "react-redux";
import axios from "axios";

// Axios interceptor to add Authorization header for every request
axios.interceptors.request.use(function(config) {
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = "Token " + token;

  return config;
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
