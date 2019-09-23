import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {

  // this.props.pets WILL ACCESS THE CURRENT PETS FROM APP


  render() {
    return <div className="ui cards">
      {this.props.pets.map((currentPet, index) => {
        return <Pet pet={currentPet} key={index} onAdoptPet={this.props.onAdoptPet} />;
      })}
    </div>
  }
}

export default PetBrowser
