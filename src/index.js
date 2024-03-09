import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux";
import { Provider } from "react-redux";
import { JwtContext, ParseJwt } from "./Context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <JwtContext.Provider value={{ ParseJwt }}>
    <Provider store={store}>
      <App />
    </Provider>
  </JwtContext.Provider>
);
