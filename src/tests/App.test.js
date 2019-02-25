import React from "react";
import App from "../Components/App";
import { shallow } from "enzyme";
import pioneersData from '../pioneers'

describe("App", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });
	
  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a proper default state", () => {
    expect(wrapper.state()).toEqual({ pioneers : pioneersData });
  });
});