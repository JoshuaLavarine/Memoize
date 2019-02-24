import React, {Component} from 'react';

class Score extends Component {
  constructor() {
    super();
    this.state = {
      // empty
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

  render() {
    let currentPioneer = this.props.pioneers.pioneersData.find(pioneer => {
      return pioneer.id == this.props.currentPioneer
    })
    console.log(currentPioneer)
    switch(this.props.currentQuestion >= currentPioneer.multipleChoice.questions.length + 1) {
      case(true):
      return (
        <section>
            <p>You scored {this.props.guessesCorrect} out of {this.props.currentQuestion - 1}</p>
            <button onClick={this.props.selectPioneer} id={0}>Choose New Pioneer</button>
        </section>
      )
    default:
      return (
        <section>
          <p>You scored {this.props.guessesCorrect} out of {this.props.currentQuestion - 1}</p>
          <button onClick={this.props.displayScore}>Next Question</button>
          <button onClick={this.props.selectPioneer} value={0}>Return to Home Screen</button>
        </section>
      )
    }
  }
}

export default Score;