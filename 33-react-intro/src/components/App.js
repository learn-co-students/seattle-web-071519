import React from "react";
import Hello from "./Hello";
import PetList from "./PetList";
import NewPetForm from "./NewPetForm";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      pets: [
        { color: "red", name: "Paris" },
        { color: "orange", name: "Matilda" },
        { color: "teal", name: "Titan" }
      ]
    };
  }

  addPet = newPet => {
    this.setState(prevState => {
      return { pets: [...prevState.pets, newPet] };
    });
  };

  render() {
    return (
      <div className="container">
        <Hello />
        <NewPetForm exampleProp={"test"} onAddPet={this.addPet} />
        <PetList pets={this.state.pets} />
      </div>
    );
  }
}

export default App;
