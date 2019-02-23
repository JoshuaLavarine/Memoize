import React, { Component } from 'react';
import Article from './Article';

class Pioneer extends Component {
  constructor() {
    super();
    this.state = {
      currentPioneer: 0
    }
  }

  
  selectPioneer = (event) => {
    this.setState({
      currentPioneer: event.target.id
    })
  }

  displayPioneers = () => {
    return this.props.pioneers.pioneersData.map(pioneer => {
      return (
        <img onClick={this.selectPioneer} src={pioneer.img} id={pioneer.id}></img>
      )
    });
  } 

  render() {
    switch(this.state.currentPioneer > 0) {
      case(true):
      return (
        <Article 
        currentPioneer={this.state.currentPioneer}
        pioneers={this.props.pioneers}/>
        
      )
    default:
      return (
        <article>
          <p>select a pioneer from the following images</p>
          <section>
            {this.displayPioneers()}
          </section>
        </article>
      )
    }
  }
}

export default Pioneer