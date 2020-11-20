import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import STORE from "./store";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App store={STORE} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
