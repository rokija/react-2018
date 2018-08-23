import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import PostCard, { sum } from "./index";

describe("testing PostCard", () => {
  const wrapper = mount(<PostCard />);

  it("sums two numbers", () => {
    expect(sum(3, 5)).toEqual(8);
  });

  it("renders properly", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("renders a snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
