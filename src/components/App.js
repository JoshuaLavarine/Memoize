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

  // componentDidMount() {
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
  // }

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
