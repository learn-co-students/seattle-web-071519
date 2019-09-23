import React, { Component } from "react";
import Food from "./Food";

class Buffet extends Component {

  displayBuffet = () => {
    //map over the food list
    return this.props.food.map((item, index) => {
      return <Food foodItem={item} key={index} onClickFood={this.props.onSelectFood} />
    })
  };

  render() {
    return (
      <div className="container jumbotron">
        <h4>BUFFET CONTENTS</h4>
        <div className="row">{this.displayBuffet()}</div>
      </div>
    );
  }
}

export default Buffet;
