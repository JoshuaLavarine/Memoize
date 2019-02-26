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
			currentPioneer={5}
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
	
  it("should change the displayQuiz to true", () => {
    wrapper.setState({ displayQuiz: false });
    wrapper.find(".button-quiz").first().simulate("click", { target: {id: 1}});
    expect(wrapper.state("displayQuiz")).toEqual(true);
	});
	
	// testing reset Incorrect Answers through displayQuizAndResetIncorrectAnswers
	it("should reset incorrect answers in state", () => {
		 wrapper.setState({ 
			 displayQuiz: false,
			 incorrectAnswers: {
        1: [1, 2, 3, 4, 5],
        2: [1, 2, 3, 4, 5],
        3: [1, 2, 3, 4, 5],
        4: [1, 2, 3, 4, 5],
        5: []
			}
		});
		// wrapper.instance().resetIncorrectAnswers()
		 wrapper.find(".button-quiz").first().simulate("click", { target: {id: 5}});
		 expect(wrapper.state('incorrectAnswers')).toEqual({ 
        1: [1, 2, 3, 4, 5],
        2: [1, 2, 3, 4, 5],
        3: [1, 2, 3, 4, 5],
        4: [1, 2, 3, 4, 5],
        5: [1, 2, 3, 4, 5]
			})
	});

	it("should match the alternative snapshot with all data passed in", () => {
		const newWrapper = shallow(
			<Article 
			currentPioneer={1}
			pioneers={pioneers}
			selectPioneer = {mockSelectPioneer}
			/>    
		)
		newWrapper.instance().displayQuizAndResetIncorrectAnswers()

		expect(wrapper).toMatchSnapshot();

	})
})