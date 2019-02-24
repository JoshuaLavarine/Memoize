import React, { Component } from 'react';

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      currentQuestion: 1,
      guessesCorrect: 0,
      guessValue: ''
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
      <section>
        <p>Question: {currentQuestion.prompt}</p>
        <p>Possible Answers:</p>
      </section>
    )
  }

  displayPossibleAnswers = () => {
    let selectedPioneer = this.props.pioneers.pioneersData.find(pioneer => {
      return pioneer.id == this.props.currentPioneer
    })
    let currentQuestion = selectedPioneer.multipleChoice.questions.find(question => {
      return question.id == this.state.currentQuestion
    })
    let incorrectChoices = currentQuestion.incorrectAnswers.map(question => {
      return (
        <section>
          <input type="radio" id={Date.now()} value={question}></input>
          <label for={Date.now()}>{question}</label>
        </section>
      )
    })
    return incorrectChoices
  }

  displayCorrectAnswer = () => {
    let selectedPioneer = this.props.pioneers.pioneersData.find(pioneer => {
      return pioneer.id == this.props.currentPioneer
    })
    let currentQuestion = selectedPioneer.multipleChoice.questions.find(question => {
      return question.id == this.state.currentQuestion
    })
    let correctAnswer = currentQuestion.correctAnswer
    return (
      <section>
      <input type="radio" id={Date.now()} value={correctAnswer}></input>
      <label for={Date.now()}>{correctAnswer}</label>
      </section>
    )
  }

  getClickedValue = (event) => {
    this.setState({
      guessValue: event.target.value
    })
  }

  checkCorrectAnswer = (e) => {
    e.preventDefault();
    let selectedPioneer = this.props.pioneers.pioneersData.find(pioneer => {
      return pioneer.id == this.props.currentPioneer
    })
    let currentQuestion = selectedPioneer.multipleChoice.questions.find(question => {
      return question.id == this.state.currentQuestion
    })
    let correctAnswer = currentQuestion.correctAnswer
    if (this.state.guessValue === correctAnswer) {
      this.setState({
        guessesCorrect: this.state.guessesCorrect + 1,
        currentQuestion: this.state.currentQuestion + 1,
        guessValue: ''
      })
    } else {
      this.setState({
        currentQuestion: this.state.currentQuestion + 1,
        guessValue: ''
      })
    }
  }

  render() {
    return (
      <form>
        <section onClick={this.getClickedValue}>{this.displayPrompt()}</section>
        <section onClick={this.getClickedValue}>{this.displayCorrectAnswer()}</section>
        <section onClick={this.getClickedValue}>{this.displayPossibleAnswers()}</section>
        <button type="reset" onClick={this.checkCorrectAnswer}>Submit Answer</button>
      </form>
    )
  }
}

export default Quiz;