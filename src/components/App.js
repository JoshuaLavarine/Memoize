import React, { Component } from 'react';
import Header from './Header';
import Pioneer from './Pioneer';
import pioneersData from '../pioneers'

class App extends Component {
  constructor() {
    super();
    this.state = {
      pioneers : pioneersData
    }
  }

  //   fetch("http://")
  //     .then(response => response.json())
  //     .then(data => {
    //       this.setState({
      //         pioneers: data.pioneers
      //       });
      //     })
      //     .catch(error => {
        //       throw new Error(error);
        //     }); 
        
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

  render() {
    return (
      <div className="App">
        <Header />
        <Pioneer 
        pioneers={this.state.pioneers}
        hydrate={this.hydrateStateWithLocalStorage}
        saveToLocal={this.saveStateToLocalStorage}
        />
      </div>
    );
  };
};

export default App;