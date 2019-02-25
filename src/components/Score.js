import React, {Component} from 'react';

class Score extends Component {
  constructor() {
    super();
    this.state = {
      // empty
    }
  }

  // selectPioneerAndResetIncorrectAnswers = () => {
  //   this.props.selectPioneer()
  //   this.props.resetIncorrectAnswers()
  // }

  render() {
    let currentPioneer = this.props.pioneers.pioneersData.find(pioneer => {
      return pioneer.id == this.props.currentPioneer
    })
    switch(this.props.currentQuestionIndex === this.props.arrayLength.length) {
      case(true):
      return (
        <section className="article-layout-correct">
            <p>You scored {this.props.guessesCorrect} out of {this.props.currentUserGuess}</p>
            <section className="button-container-correct">
              <button className="button-quiz-correct" onClick={this.props.selectPioneer} id={0}>Choose New Pioneer</button>
            </section>
        </section>
      )
    default:
      return (
        <section className="article-layout">
          <p>You scored {this.props.guessesCorrect} out of {this.props.currentUserGuess}</p>
           <section className="button-container">
            <button className="button-back" onClick={this.props.selectPioneer} value={0}>Return to Home Screen</button>
            <button className="button-quiz" onClick={this.props.displayScore}>Next Question</button>
          </section> 
        </section>
      )
    }
  }
}

export default Score;