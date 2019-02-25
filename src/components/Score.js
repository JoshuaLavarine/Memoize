import React, {Component} from 'react';

class Score extends Component {
  constructor() {
    super();
    this.state = {
      // empty
    }
  }

  render() {
    let currentPioneer = this.props.pioneers.pioneersData.find(pioneer => {
      return pioneer.id == this.props.currentPioneer
    })
    switch(this.props.currentQuestionIndex === this.props.arrayLength.length) {
      case(true):
      return (
        <section>
            <p>You scored {this.props.guessesCorrect} out of {this.props.currentUserGuess}</p>
            <button onClick={this.props.selectPioneer} id={0}>Choose New Pioneer</button>
        </section>
      )
    default:
      return (
        <section>
          <p>You scored {this.props.guessesCorrect} out of {this.props.currentUserGuess}</p>
          <button onClick={this.props.displayScore}>Next Question</button>
          <button onClick={this.props.selectPioneer} value={0}>Return to Home Screen</button>
        </section>
      )
    }
  }
}

export default Score;