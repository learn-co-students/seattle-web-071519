import React, { Component } from "react";
import Food from "./Food";

class Plate extends Component {

  displayPlate = () => {
    //map over the food list
    return this.props.food.map((item, index) => {
      return (
        <Food
          foodItem={item}
          key={index}
          onClickFood={this.props.onEatFood}
        />
      );
    });
  };

  render() {
    return (
      <div className="container jumbotron">
        <h4>PLATE CONTENTS</h4>
        <div className="row">{this.displayPlate()}</div>
      </div>
    );
  }
}

export default Plate;
