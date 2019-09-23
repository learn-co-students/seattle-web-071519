import React, { Component } from "react";
import "./App.css";
import Buffet from "./components/Buffet";
import Plate from "./components/Plate";
import FOOD_ITEMS from "./FOOD.js";

class App extends Component {
  state = {
    buffetFood: FOOD_ITEMS.food, //this resolves to an array of objects with "name" and "image" props
    plateFood: []
  };

  selectFood = food => {
    this.setState(prevState => {
      return { plateFood: [...prevState.plateFood, { ...food, id: (Date.now()+Math.random()) }] };
    });
  };

  eatFood = food => {
    this.setState(prevState => {
      const newPlate = prevState.plateFood.filter(foodItem => foodItem.id !== food.id);
      return { plateFood: newPlate }
    });
  };

  render() {
    return (
      <div className="App">
        <h3>Welcome to the Infinity Buffet</h3>
        <Buffet onSelectFood={this.selectFood} food={this.state.buffetFood} />
        <Plate onEatFood={this.eatFood} food={this.state.plateFood} />
      </div>
    );
  }
}

export default App;
