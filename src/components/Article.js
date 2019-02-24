import React, { Component } from "react";
import Quiz from './Quiz';

class Article extends Component {
  constructor() {
    super();
    this.state = {
      displayQuiz: false
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

  displayQuiz = () => {
    this.setState({
      displayQuiz: true
    })
  }

  displayPioneer = () => {
    let selectedPioneer = this.props.pioneers.pioneersData.find(pioneer => {
      return pioneer.id == this.props.currentPioneer
    })
    return ( 
      <img className="pioneer" src={selectedPioneer.img}></img>
    )
  }

  displayArticle = () => {
    let selectedPioneer = this.props.pioneers.pioneersData.find(pioneer => {
      return pioneer.id == this.props.currentPioneer
    })
    let allParagraphs = selectedPioneer.paragraphs.map(paragraph => {
      return <p>{paragraph}</p>
    })
    return allParagraphs
  }

  render() {
    switch(this.state.displayQuiz) {
      case(true):
      return (
        <Quiz 
        currentPioneer={this.props.currentPioneer}
        pioneers={this.props.pioneers}
        selectPioneer = {this.props.selectPioneer}
        hydrate={this.props.hydrate}
        saveToLocal={this.props.saveToLocal}
        />
      )
    default:
      return (
        <section>
          <article>
            {this.displayPioneer()}
          </article>
          <article>
            {this.displayArticle()}
          </article>
          <button onClick={this.displayQuiz}>Go to Quiz</button>
          <button onClick={this.props.selectPioneer} value={0}>Go Back</button>
        </section>
      )
    }
  }
}

export default Article;