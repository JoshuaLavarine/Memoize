import React, { Component } from 'react';
import Header from './Header';
import Pioneer from './Pioneer';
// import pioneersData from '../pioneers'

class App extends Component {
  constructor() {
    super();
    this.state = {
      pioneers : []
    }
  }

  
  componentDidMount() {
      fetch("http://memoize-datasets.herokuapp.com/api/v1/pioneersdata")
        .then(response => response.json())
        .then(data => {
            this.setState({
                pioneers: data.pioneersData
              });
            })
            .catch(error => {
                throw new Error(error);
              }); 
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