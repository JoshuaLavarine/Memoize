import React from "react";
import Article from "../Components/Article";
import { shallow } from "enzyme";
import { pioneers } from "./mockData";

describe("Article", () => {
	const mockSelectPioneer = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
			<Article 
			currentPioneer={1}
			pioneers={pioneers}
			selectPioneer = {mockSelectPioneer}
		/>    
    );
  });
	
  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a proper default state", () => {
    expect(wrapper.state()).toEqual({ 
			displayQuiz: false,
      incorrectAnswers: {
        1: [1, 2, 3, 4, 5],
        2: [1, 2, 3, 4, 5],
        3: [1, 2, 3, 4, 5],
        4: [1, 2, 3, 4, 5],
        5: [1, 2, 3, 4, 5]
			}
		});
	});
	
	it.skip("should change the displayQuiz to true", () => {
		
		// expect(
	});

});