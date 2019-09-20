import React from "react";
import Hello from "./Hello";
import PetList from "./PetList";
import NewPetForm from "./NewPetForm";

class App extends React.Component {

  constructor() {
    super();
    console.log("%cAPP contructed", "color:red;")
    this.state = {
      superSecretWord: "banana",
      editing: false,
      formLifespan: 0,
      pets: [
        { color: "red", name: "Paris" },
        { color: "orange", name: "Matilda" },
        { color: "teal", name: "Titan" }
      ]
    };
  }

  componentDidMount() {
    console.log("%cAPP mounted", "color:green;")
  }

  formTimer = null

  timer = () => {
    this.formTimer =setInterval(() => {
    this.setState(prevState => {
      return {formLifespan: prevState.formLifespan + 1}
    })
  }, 1000)
  }


  timerStop = () => {
    clearInterval(this.formTimer);
  }

  addPet = newPet => {
    this.setState(prevState => {
      return { pets: [...prevState.pets, newPet] };
    });
  };

  render() {

    // (function(phrase) {
    //   alert(phrase)
    // })("THIS IS AN ARGUEMNT")

  //  let aThing =(true && true && true  && true);
  //   alert(aThing)

    console.log("APP was rendered")
    return (
      <div className="container">
        <Hello word={this.state.superSecretWord}/>
        <h1>{this.state.formLifespan}</h1>
        <button onClick={() => {this.setState({editing: !this.state.editing})}}>Toggle Editing</button>
        {this.state.editing?<NewPetForm onTimerStart={this.timer} onTimerStop={this.timerStop} onAddPet={this.addPet} />:null}
        <PetList pets={this.state.pets} />
      </div>
    );
  }
}

export default App;
