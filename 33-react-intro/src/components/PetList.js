import React, {Component} from 'react'
import Pet from './Pet'

class PetList extends Component {
    
    renderPets = () => {
      return this.props.pets.map((pet, index) => <Pet key={index} color="teal" pet={pet} />);
    };

    render() {
        return (<div>
            <ul>
                {this.renderPets()}
            </ul>
        </div>)
    }
}

export default PetList