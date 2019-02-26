import React from "react";
import Quiz from "../Components/Quiz";
import { shallow } from "enzyme";
import { pioneers } from "./mockData";

describe("Quiz", () => {
  const mockSelectPioneer = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Quiz 
      currentPioneer={1}
      pioneers={pioneers}
      selectPioneer = {mockSelectPioneer}
      incorrectAnswers = {{
        1: [1, 2, 3, 4, 5],
        2: [1, 2, 3, 4, 5],
        3: [1, 2, 3, 4, 5],
        4: [1, 2, 3, 4, 5],
        5: [1, 2, 3, 4, 5]
      }}
      />   
    );
  });
	
  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a proper default state", () => {
    expect(wrapper.state()).toEqual({ 
      currentUserGuess: 0,
      currentQuestionIndex: 0,
      guessesCorrect: 0,
      guessValue: '',
      displayScore: false,
      enableButton: true
		});
	});
});