import React, { Component } from "react";
import Quiz from './Quiz';

class Article extends Component {
  constructor() {
    super();
    this.state = {
      displayQuiz: false
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
      <img src={selectedPioneer.img}></img>
    )
  }

  render() {

    switch(this.state.displayQuiz) {
      case(true):
      return (
        <Quiz 
        currentPioneer={this.props.currentPioneer}
        pioneers={this.props.pioneers}
        />
      )
    default:
      return (
        <section>
          <article>
            {this.displayPioneer()}
          </article>
          <p>Article paragraphs go here</p>
          <p>Once the article is displayed, there will be a button to click. When the button is clicked, the article goes away and the questions component is displayed</p>
          <button onClick={this.displayQuiz}>Go to Quiz</button>
        </section>
      )
    }
  }
}

export default Article;