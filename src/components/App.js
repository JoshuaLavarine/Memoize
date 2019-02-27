import React, { Component } from 'react';
import Header from './Header';
import Pioneer from './Pioneer';

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
        />
      </div>
    );
  };
};

export default App;