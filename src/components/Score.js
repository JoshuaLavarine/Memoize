import React, {Component} from 'react';

class Score extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <section>
        <p>You scored {this.props.guessesCorrect} out of {this.props.currentQuestion - 1}</p>
        <button onClick={this.props.displayScore}>Next Question</button>
      </section>
    )
  }
  
}

export default Score;