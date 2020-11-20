import Card from "./Card";
import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

describe("Card Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Card title="Test Title" content="Test Content" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer
      .create(<Card title="Test Title" content="Test Content" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
