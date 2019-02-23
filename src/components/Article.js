import React, { Component } from "react";
import Quiz from './Quiz';

class Article extends Component {
  constructor() {
    super();
    this.state = {
      displayQuiz: false
    }
  }

  displayQuiz = (event) => {
    this.setState({
      displayQuiz: true
    })
  }

  displayPioneer = () => {
    let selectedPioneer = this.props.pioneers.pioneersData.find(pioneer => {
      console.log("current pioneer id", this.props.currentPioneer)
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
        <Quiz />
      )
    default:
      return (
        <section>
          <article>
            {this.displayPioneer()}
          </article>
          <p>Article paragraphs go here</p>
          <p>Once the article is displayed, there will be a button to click. When the button is clicked, the article goes away and the questions component is displayed</p>
          <button onClick={this.state.displayQuiz}>Go to Quiz</button>
        </section>
      )
    }
  }
}

export default Article;