import React from "react";
import { shallow } from "enzyme";
import Home from "./index";

describe("Home", () => {
  const props = {
    validateToken: jest.fn(),
    loginReducer: {
      isLogged: true
    }
  };
  const wrapper = shallow(<Home {...props} />);

  it("renders properly", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("changes state after calling handleOpenModal", () => {
    expect(wrapper.state().isModalOpen).toEqual(false);
    wrapper.instance().handleOpenModal();
    expect(wrapper.state().isModalOpen).toEqual(true);
  });
});
