import React, { Component } from 'react';

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      currentQuestion: 1,
      guessesCorrect: 0
    }
  }

  makeGuess = () => {

  }

  displayPrompt = () => {
    let selectedPioneer = this.props.pioneers.pioneersData.find(pioneer => {
      return pioneer.id == this.props.currentPioneer
    })
    let currentQuestion = selectedPioneer.multipleChoice.questions.find(question => {
      return question.id == this.state.currentQuestion
    })
    return (
      <p>Question: {currentQuestion.prompt}</p>
    )
  }

  render() {
    return (
      <form>
        <div>{this.displayPrompt()}</div>
      </form>
    )
  }
}

export default Quiz;