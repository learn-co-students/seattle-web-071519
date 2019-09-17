import React, { Component } from "react";

const INITIAL_STATE = {pet: {name: "", color: ""}}

class NewPetForm extends Component {
  constructor(props) {
    super();
    this.state = {...INITIAL_STATE, ...props};
  }

  handleAddPet = e => {
    e.preventDefault();
    this.props.onAddPet(this.state.pet);
    this.setState(INITIAL_STATE);
  };

  handleNameChange = event => {
    const newName = event.target.value;
    this.setState(prevState => {
      return { pet: { name: newName, color: prevState.pet.color } };
    });
  };

  // SET STATE EXAMPLE
  //   this.setState({pet: {}})

  //   this.setState(() => {
  //       return {pet: {}}
  //     })

  //     this.setState(prevState => {
  //     return {
  //         pet: {}
  //         owner: prevState.owner
  //     }
  // })

  handleColorChange = event => {
    const newColor = event.target.value;
    this.setState(prevState => {
      return { pet: { color: newColor, name: prevState.pet.name } };
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleAddPet}>
          <label>Name</label>
          <input
            type="text"
            value={this.state.pet.name}
            onChange={this.handleNameChange}
          />
          <label>Favorite Color</label>
          <input
            type="text"
            value={this.state.pet.color}
            onChange={this.handleColorChange}
          />
          <button>Submit</button>
        </form>
      </>
    );
  }
}

export default NewPetForm;
