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
        </section>
      )
    }
  }
}

export default Article;