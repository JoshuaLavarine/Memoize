import React, { Component } from 'react';
import Score from './Score'

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      currentGuess: 0,
      currentQuestion: 0,
      guessesCorrect: 0,
      guessValue: '',
      displayScore: false,
      enableButton: true,
      incorrectAnswers: {
        1: [1,2,3,4,5],
        2: [1,2,3,4,5],
        3: [1,2,3,4,5],
        4: [1,2,3,4,5],
        5: [1,2,3,4]
      }
    }
  }
  nextQuestion = () => {
    let selectedPioneer = this.props.pioneers.pioneersData.find(pioneer => {
      return pioneer.id == this.props.currentPioneer
    })
    let currentQuestion = selectedPioneer.multipleChoice.questions.find(question => {
      return question.id == this.state.incorrectAnswers[selectedPioneer.id][this.state.currentQuestion]
    })
    console.log('this is the question object I want displayed (add id, prompt, correctAnswer or incorrectAnswer)', currentQuestion)
    return currentQuestion
  }

  selectedPioneer = () => {
    let selectedPioneer = this.props.pioneers.pioneersData.find(pioneer => {
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

  makeGuess = () => {
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
            <input onClick={this.enableButton} type="radio" id={Date.now()} name="radioBtns" value={question}></input>
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
          <input onClick={this.enableButton} type="radio" id={Date.now()} name="radioBtns" value={correctAnswer}></input>
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
      return question.id == this.state.incorrectAnswers[selectedPioneer.id][this.state.currentQuestion]
    })
    let correctAnswer = currentQuestion.correctAnswer



    if (this.state.guessValue === correctAnswer) {
      let updatedIncorrectAnswers = this.state.incorrectAnswers[this.props.currentPioneer];
      
      console.log('latest set state of incorrect answers', updatedIncorrectAnswers)

      let index = updatedIncorrectAnswers.indexOf(this.nextQuestion().id)
      console.log('index of the question that i want to delete', index)

      updatedIncorrectAnswers.splice(index, 1)
      console.log('after splice updatedInAnswers', updatedIncorrectAnswers)


      this.setState(prevState => ({
        incorrectAnswers: {
            ...prevState.incorrectAnswers,
          [selectedPioneer.id]: updatedIncorrectAnswers,
        }
      }))
      this.setState({
        guessesCorrect: this.state.guessesCorrect + 1,
        currentQuestion: this.state.currentGuess + 1,
        guessValue: '',
      })
      this.displayScore()





    } else {
      let updatedIncorrectAnswers = this.state.incorrectAnswers[this.props.currentPioneer];
      // updatedIncorrectAnswers.push(this.state.currentQuestion)
      this.setState({
        currentQuestion: this.state.currentQuestion + 1,
        guessValue: '',
        currentQuestion: this.state.currentGuess + 1,
      })
      // this.setState(prevState => ({
      //   incorrectAnswers: {
      //       ...prevState.incorrectAnswers,
      //     [selectedPioneer.id]: updatedIncorrectAnswers,
      //   }
      // }))
      localStorage.setItem('incorrectAnswers', JSON.stringify(this.state.incorrectAnswers));
      this.displayScore()
    }
  }

  // findLocalState = () => {
  //   return 
  // }

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

  resetQuestionCount = () => {
    this.setState({
      currentQuestion: 1
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
          resetQuestionCount = {this.resetQuestionCount}
          enableButton = {this.enableButton}    
          currentGuess = {this.state.currentGuess}
          arrayLength = {this.state.incorrectAnswers[this.selectedPioneer().id].length}
          />
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