import React, { Component } from "react";

class Article extends Component {
  constructor() {
    super();
    this.state = {
      clickedButton: false
    }
  }

  render() {
    return (
      <section>
        <p>this is where the article displays must be greater than 0</p>
      </section>
    )
  }
}



export default Article;