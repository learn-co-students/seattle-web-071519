import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
  }

  adoptPet = petId => {
    this.setState(prevState => {
      const newPets = [...prevState.pets];
      newPets.forEach(pet => {
        if (pet.id === petId) {
          pet.isAdopted = true;
        }
      });
      return { pets: newPets };
    });
  };

  changeType = newType => {
    this.setState({ filters: { type: newType } });
  };

  findPets = () => {
    let API_URL =
      "/api/pets" +
      (this.state.filters.type === "all"
        ? ""
        : `?type=${this.state.filters.type}`);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => this.setState({ pets: data }));
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.changeType}
                onFindPetsClick={this.findPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
