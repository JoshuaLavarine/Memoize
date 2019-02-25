import React, { Component } from "react";
import Quiz from './Quiz';

class Article extends Component {
  constructor() {
    super();
    this.state = {
      displayQuiz: false,
      incorrectAnswers: {
        1: [1, 2, 3, 4, 5],
        2: [1, 2, 3, 4, 5],
        3: [1, 2, 3, 4, 5],
        4: [1, 2, 3, 4, 5],
        5: [1, 2, 3, 4, 5]
      }
    }
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

  displayQuiz = () => {
    this.setState({
      displayQuiz: true
    })
  }

  displayPioneer = () => {
    let selectedPioneer = this.props.pioneers.find(pioneer => {
      return pioneer.id == this.props.currentPioneer
    })
    return ( 
      <img className="pioneer" src={selectedPioneer.img}></img>
    )
  }

  displayArticle = () => {
    let selectedPioneer = this.props.pioneers.find(pioneer => {
      return pioneer.id == this.props.currentPioneer
    })
    let allParagraphs = selectedPioneer.paragraphs.map(paragraph => {
      return <p>{paragraph}</p>
    })
    return allParagraphs
  }


  resetIncorrectAnswers = () => {
    let selectedPioneer = this.props.pioneers.find(pioneer => {
      return pioneer.id == this.props.currentPioneer
    })
    // console.log('conditional', this.state.incorrectAnswers[selectedPioneer.id].length)
    if (this.state.incorrectAnswers[selectedPioneer.id].length === 0) {
      console.log('resetthe state')
      this.setState(prevState => ({
        incorrectAnswers: {
            ...prevState.incorrectAnswers,
          [selectedPioneer.id]: [1, 2, 3, 4, 5]
        }
      }))
    }
    console.log('before LS', localStorage) 
    localStorage.setItem('incorrectAnswers', JSON.stringify(this.state.incorrectAnswers));
    console.log('after LS', localStorage)
  }

  displayQuizAndResetIncorrectAnswers = () => {
    this.resetIncorrectAnswers()
    this.displayQuiz()
  }

  render() {
    switch(this.state.displayQuiz) {
      case(true):
      return (
        <Quiz 
        currentPioneer={this.props.currentPioneer}
        pioneers={this.props.pioneers}
        selectPioneer = {this.props.selectPioneer}
        incorrectAnswers = {this.state.incorrectAnswers}
        />
      )
    default:
      return (
        <section className="complete-article">
          <article className='pioneer-img-article'>
            {this.displayPioneer()}
          </article>
          <article className='pioneer-article'>
            {this.displayArticle()}
          </article>
          <section className="button-container">
            <button className="button-back" onClick={this.props.selectPioneer} value={0}>Go Back</button>
            <button className="button-quiz" onClick={this.displayQuizAndResetIncorrectAnswers}>Go to Quiz</button>
          </section>
        </section>
      )
    }
  }
}

export default Article;