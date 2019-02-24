import React, { Component } from 'react';
import Score from './Score'

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      currentQuestion: 1,
      guessesCorrect: 0,
      guessValue: '',
      displayScore: false,
      enableButton: true
    }
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage
    );
    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
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

  saveStateToLocalStorage = () => {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
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
          <label onChange={this.enableButton} className="radio-buttons">
            <input onChange={this.enableButton} type="radio" id={Date.now()} name="radioBtns" value={question}></input>
            {question}
          </label>
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
        <label onChange={this.enableButton} className="radio-buttons">
          <input onChange={this.enableButton} type="radio" id={Date.now()} name="radioBtns" value={correctAnswer}></input>
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
        guessValue: '',
      })
      this.displayScore()
    } else {
      this.setState({
        currentQuestion: this.state.currentQuestion + 1,
        guessValue: '',
      })
      this.displayScore()
    }
  }

  displayScore = () => {
    this.setState({
      displayScore: !this.state.displayScore
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
          currentQuestion = {this.state.currentQuestion}
          guessesCorrect = {this.state.guessesCorrect}
          displayScore = {this.displayScore}
          currentPioneer = {this.props.currentPioneer}
          selectPioneer = {this.props.selectPioneer}
          pioneers = {this.props.pioneers}
          hydrate={this.props.hydrate}
          saveToLocal={this.props.saveToLocal}          />
      )
    default:
      return (
        <form>
          <section onClick={this.getClickedValue}>{this.displayPrompt()}</section>
          <section onClick={this.getClickedValue}>{this.displayCorrectAnswer()}</section>
          <section onClick={this.getClickedValue}>{this.displayPossibleAnswers()}</section>
          <button disabled={this.state.enableButton} type="submit" onClick={this.checkCorrectAnswer}>Submit Answer</button>
          <button onClick={this.props.selectPioneer} value={0}>Return to Home Screen</button>
        </form>
      )
    }
  }
}




export default Quiz;