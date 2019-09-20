import React, { Component } from "react";
import Pet from "./Pet";

class PetList extends Component {
  renderPets = () => {
    return this.props.pets.map((pet, index) => (
      <Pet key={index} color="teal" pet={pet} />
    ));
  };

  componentDidUpdate(props, state, snapshot) {
      console.log(state)
      console.log(props)
      console.log(snapshot)
    //   console.log("%cPET LIST has updated", "color:pink;")
  }

  componentWillReceiveProps(props) {
    // console.log("PROPS HAVE CHANGED", props)
  }

  render() {
    return (
      <div>
        <ul>{this.renderPets()}</ul>
      </div>
    );
  }
}

export default PetList;
