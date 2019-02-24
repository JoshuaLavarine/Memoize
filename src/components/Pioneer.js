import React, { Component } from 'react';
import Article from './Article';

class Pioneer extends Component {
  constructor() {
    super();
    this.state = {
      currentPioneer: 0
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
        selectPioneer = {this.selectPioneer}
        hydrate={this.props.hydrate}
        saveToLocal={this.props.saveToLocal}
        />
        
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