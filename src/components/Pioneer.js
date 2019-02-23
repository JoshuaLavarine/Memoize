import React, { Component } from 'react';
import Article from './Article';

class Pioneer extends Component {
  constructor() {
    super();
    this.state = {
      currentPioneer: 0
    }
  }

  displayPioneers = () => {
// adds images to the page 
  } 

  selectPioneer = () => {
// on click select image 
// grab id
  }

  render() {
    switch(this.state.currentPioneer > 0) {
      case(true):
      return (
        <Article />
      )
    default:
      return (
        <article>
          <p>select a pioneer from the following images</p>
          {/* <img> map through the images of 5 pioneers</img> */}
        </article>
      )
    }
  }
}

export default Pioneer