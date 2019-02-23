import React, { Component } from "react";

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

  render() {
    const displayPioneer = this.props.pioneers.find(pioneer => {
      return pioneer.id === this.props.currentPioneer
    })

    // switch() {
    //   case(true):
    //   return (

    //   )
    // default:
      return (
        <section>
          <img src={displayPioneer.img}></img>
          <p>Article paragraphs go here</p>
          <p>Once the article is displayed, there will be a button to click. When the button is clicked, the article goes away and the questions component is displayed</p>
          <button onClick={this.state.displayQuiz}>Go to Quiz</button>
        </section>
    )
  }
}

export default Article;