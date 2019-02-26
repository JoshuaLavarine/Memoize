import React from "react";
import Pioneer from "../Components/Pioneer";
import { shallow } from "enzyme";
import { pioneers } from "./mockData";

describe("Pioneer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Pioneer 
      pioneers={pioneers}
      />   
    );
  });
	
  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a proper default state", () => {
    expect(wrapper.state()).toEqual({ 
			currentPioneer: 0
		});
	});
});