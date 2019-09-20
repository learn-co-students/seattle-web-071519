import React, { Component, PropTypes } from "react";

const INITIAL_STATE = {pet: {name: "", color: ""}}

class NewPetForm extends Component {
  // constructor(props) {
  //   super();
  //   this.state = {...INITIAL_STATE, ...props};
  // }

  state = { ...INITIAL_STATE, ...this.props };

  handleAddPet = e => {
    e.preventDefault();
    this.props.onAddPet(this.state.pet);
    this.setState(INITIAL_STATE);
  };

  handleNameChange = event => {
    const newName = event.target.value;
    this.setState(
      prevState => {
        return { pet: { name: newName, color: prevState.pet.color } };
      },
      () => console.log(this.state.pet)
    );
    //this.setState({newState}, () => callback for end of async)
    
  };

  // componentWillUnmount() {
  //   this.props.onTimerStop();
  // }

  // componentWillMount() {
  //   this.props.onTimerStart();
  // }

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

  shouldIGoToTheMall() {
    if (this.props.user === "Sarah") {
      return <h2>Go to the Mall</h2>;
    } else if (this.props.user === "John") {
      return <h3>Nah</h3>;
    } else {
      return <h4>Only if this is not Stanger Things Season 3</h4>;
    }
  }

  render() {
    console.log("NEW PET FORM rendered");
    
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
        {this.shouldIGoToTheMall()}
      </>
    );
  }
}

NewPetForm.defaultProps = {
  user: "John"
}



export default NewPetForm;
