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
  
  it("should match the alternative snapshot with all data passed in", () => {
		const newWrapper = shallow(
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
		)
		newWrapper.instance().displayScore()

		expect(newWrapper).toMatchSnapshot();
  });
  
  it("should change disabled button to false", () => {
    wrapper.instance().enableButton();
    expect(wrapper.state('enableButton')).toEqual(false)
  });

  it('should toggle displayScore state and change enable button state to true', () => {
    // run true run false
    wrapper.setState({ enableButton: false })
    wrapper.instance().displayScore();
    expect(wrapper.state('displayScore')).toEqual(true)
    expect(wrapper.state('enableButton')).toEqual(true)
    wrapper.instance().displayScore();
    expect(wrapper.state('displayScore')).toEqual(false)
  });

  it('should reset the guess value and increment the currentQuestionIndex and currentUserGuess', () => {
    expect(wrapper.state('currentUserGuess')).toEqual(0)
    expect(wrapper.state('currentQuestionIndex')).toEqual(0)
    wrapper.setState({ guessValue: 'hello' })

    wrapper.instance().displayScore = jest.fn()
    wrapper.instance().setIncorrectAnswerState();
    
    expect(wrapper.state('currentUserGuess')).toEqual(1)
    expect(wrapper.state('currentQuestionIndex')).toEqual(1)
    expect(wrapper.state('guessValue')).toEqual('')
    expect(wrapper.instance().displayScore).toHaveBeenCalled()
  });

  it('should reset the guess value, remove correct answers, and increment the guessesCorrect and currentUserGuess', () => {
    expect(wrapper.state('currentUserGuess')).toEqual(0)
    expect(wrapper.state('guessesCorrect')).toEqual(0)
    wrapper.setState({ guessValue: 'hello' })

    wrapper.instance().displayScore = jest.fn()
    wrapper.instance().setCorrectAnswerState();
    
    expect(wrapper.state( 'incorrectAnswers' )).toEqual({
      "1": [2, 3, 4, 5]
    })
    expect(wrapper.state('currentUserGuess')).toEqual(1)
    expect(wrapper.state('guessesCorrect')).toEqual(1)
    expect(wrapper.state('guessValue')).toEqual('')
    expect(wrapper.instance().displayScore).toHaveBeenCalled()
  });

  it('should check if answer is incorrect', () => {
    const e = { preventDefault: jest.fn( )};
    wrapper.instance().preventDefault = jest.fn()
    wrapper.instance().setIncorrectAnswerState = jest.fn()
    
    wrapper.instance().checkCorrectAnswer(e);
    
    expect(wrapper.instance().setIncorrectAnswerState).toHaveBeenCalled()

  });

  it('should check if answer is correct', () => {
    wrapper.setState({ guessValue: 'Yale' })
    const e = { preventDefault: jest.fn( )};
    wrapper.instance().preventDefault = jest.fn()
    wrapper.instance().setCorrectAnswerState = jest.fn()

    wrapper.instance().checkCorrectAnswer(e);

    expect(wrapper.instance().setCorrectAnswerState).toHaveBeenCalled()

  });

  it('should set the guessValue to the target value', () => {
    const e = { target: {value: 'hello'} };
    expect(wrapper.state('guessValue')).toEqual('')
    
    wrapper.instance().getClickedValue(e) 

    expect(wrapper.state('guessValue')).toEqual('hello')
  });
  
});