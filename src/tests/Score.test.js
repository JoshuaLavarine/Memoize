import React from "react";
import Score from "../Components/Score";
import { shallow } from "enzyme";
import { pioneers } from "./mockData";

describe("Score", () => {
  const displayScore = jest.fn();
  const selectPioneer = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Score 
      guessesCorrect = {2}
      displayScore = {displayScore}
      currentPioneer = {1}
      selectPioneer = {selectPioneer}
      pioneers = {pioneers}
      currentUserGuess = {1}
      currentQuestionIndex = {0}
      incorrectAnswers = {[1, 2, 3, 4, 5]}
      />   
    );
  });
	
  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });
});