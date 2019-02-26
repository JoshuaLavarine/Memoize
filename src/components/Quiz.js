import React, { Component } from 'react';
import Score from './Score'

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      currentUserGuess: 0,
      currentQuestionIndex: 0,
      guessesCorrect: 0,
      guessValue: '',
      displayScore: false,
      enableButton: true
    }
  }

  nextQuestion = () => {
    let selectedPioneer = this.props.pioneers.find(pioneer => {
      return pioneer.id == this.props.currentPioneer
    })
    let currentQuestion = selectedPioneer.multipleChoice.questions.find(question => {
      return question.id == this.props.incorrectAnswers[selectedPioneer.id][this.state.currentQuestionIndex]
    })
    return currentQuestion
  }

  selectedPioneer = () => {
    let selectedPioneer = this.props.pioneers.find(pioneer => {
      return pioneer.id == this.props.currentPioneer
    })
    return selectedPioneer
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  displayPrompt = () => {
    let currentQuestion = this.nextQuestion()
    return (
      <section>
        <p>Question: {currentQuestion.prompt}</p>
        <p>Possible Answers:</p>
      </section>
    )
  }

  displayPossibleAnswers = () => {
    let currentQuestion = this.nextQuestion()
    let incorrectChoices = currentQuestion.incorrectAnswers.map(question => {
      return (
        <section>
          <label onClick={this.enableButton} className="radio-buttons">
            <input onClick={this.enableButton} type="radio" name="radioBtns" value={question}></input>
            {question}
          </label>
        </section>
      )
    })
    return incorrectChoices
  }

  displayCorrectAnswer = () => {
    let currentQuestion = this.nextQuestion()
    let correctAnswer = currentQuestion.correctAnswer
    return (
      <section>
        <label onClick={this.enableButton} className="radio-buttons">
          <input onClick={this.enableButton} type="radio" name="radioBtns" value={correctAnswer}></input>
          {correctAnswer}
        </label>
      </section>
    )
  }

  getClickedValue = (event) => {
    this.setState({
      guessValue: event.target.value,
    })
  }

  checkCorrectAnswer = (e) => {
    e.preventDefault();
    let selectedPioneer = this.selectedPioneer();
    let currentQuestion = this.nextQuestion();
    let correctAnswer = currentQuestion.correctAnswer
    if (this.state.guessValue === correctAnswer) {
      let updatedIncorrectAnswers = this.props.incorrectAnswers[this.props.currentPioneer];
      let index = updatedIncorrectAnswers.indexOf(this.nextQuestion().id)

      updatedIncorrectAnswers.splice(index, 1)
      this.setState(prevState => ({
        incorrectAnswers: {
            ...prevState.incorrectAnswers,
          [selectedPioneer.id]: updatedIncorrectAnswers,
        }
      }))
      this.setState({
        guessesCorrect: this.state.guessesCorrect + 1,
        currentUserGuess: this.state.currentUserGuess + 1,
        guessValue: '',
      })
      localStorage.setItem('incorrectAnswers', JSON.stringify(this.props.incorrectAnswers));
      this.displayScore()
    } else {
      let updatedIncorrectAnswers = this.props.incorrectAnswers[this.props.currentPioneer];
      this.setState({
        currentQuestionIndex: this.state.currentQuestionIndex + 1,
        guessValue: '',
        currentUserGuess: this.state.currentUserGuess + 1
      })
      localStorage.setItem('incorrectAnswers', JSON.stringify(this.props.incorrectAnswers));
      this.displayScore()
    }
  }

  displayScore = () => {
    this.setState({
      displayScore: !this.state.displayScore,
      enableButton: true
    })
  }

  enableButton = () => {
    this.setState({
      enableButton: false
    })
  }

  render() {
    switch(this.state.displayScore) {
      case(true):
      return (
          <Score
          // currentQuestion = {this.state.currentQuestionIndex}
          guessesCorrect = {this.state.guessesCorrect}
          displayScore = {this.displayScore}
          currentPioneer = {this.props.currentPioneer}
          selectPioneer = {this.props.selectPioneer}
          pioneers = {this.props.pioneers}
          currentUserGuess = {this.state.currentUserGuess}
          currentQuestionIndex = {this.state.currentQuestionIndex}
          incorrectAnswers = {this.props.incorrectAnswers[this.selectedPioneer().id]}
          />
      )
    default:
      return (
        <form>
          <section onClick={this.getClickedValue}>{this.displayPrompt()}</section>
          <section onClick={this.getClickedValue}>{this.displayCorrectAnswer()}</section>
          <section onClick={this.getClickedValue}>{this.displayPossibleAnswers()}</section>
          <section className="button-container">
            <button className="button-back" onClick={this.props.selectPioneer} value={0}>Return to Home Screen</button>
            <button className="button-quiz" disabled={this.state.enableButton} onClick={this.checkCorrectAnswer}>Submit Answer</button>
          </section>
        </form>
      )
    }
  }
}




export default Quiz;