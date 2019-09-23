import React, { Component } from "react";

class Buffet extends Component {

  handleClickFood = () => {
    this.props.onClickFood(this.props.foodItem)
  }

  render() {
    const { name, image } = this.props.foodItem
    return (
      <div className="col col-md-2" onClick={this.handleClickFood}>
        <div className="card">
          {/* IMAGE BELOW */}
          <img className="card-img-top" src={ image } alt={ name } />
          <div className="card-body">
            <p>{ name }</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Buffet;
