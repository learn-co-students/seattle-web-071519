import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

const API = "http://localhost:3000/sushis";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allSushi: [],
      sushiIndex: 0,
      budget: 100,
      plates: []
    };
    this.getSushi();
  }

  getSushi = () => {
    fetch(API)
      .then(res => res.json())
      .then(sushis =>
        this.setState({
          allSushi: sushis.map(sushi => ({
            ...sushi,
            isEaten: false
          }))
        })
      );
  };
  eatSushi = e => {
    e.persist();
    let targetSushi = e.target.id;
    let updatedSushi = this.state.allSushi.map(sushi => {
      if (sushi.id === parseInt(targetSushi, 10)) {
        sushi.isEaten = true;
      }
      return sushi;
    });
    this.setState({
      allSushi: updatedSushi
    });
    console.log(this.state.allSushi);
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushi={this.state.allSushi}
          sushiIndex={this.state.sushiIndex}
          eatSushi={this.eatSushi}
        />
        <Table plates={this.state.plates} budget={this.state.budget} />
      </div>
    );
  }
}

export default App;
