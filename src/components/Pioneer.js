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
        <section key={pioneer.pioneer} className="pioneer-card">
          <img className="pioneer-img" onClick={this.selectPioneer} src={pioneer.img} id={pioneer.id}></img>
          <p>{pioneer.pioneer}</p>
        </section>
      )
    })
  } 

  render() {
    switch(this.state.currentPioneer > 0) {
      case(true):
      return (
        <Article 
        currentPioneer={this.state.currentPioneer}
        pioneers={this.props.pioneers}
        selectPioneer = {this.selectPioneer}/>
        
      )
    default:
      return (
        <article>
          <p>Please a pioneer's image to learn more.</p>
          <section className="contain-pioneers">
            {this.displayPioneers()}
          </section>
        </article>
      )
    }
  }
}

export default Pioneer