import React, { Component } from 'react'

class Pet extends Component {

    componentWillMount() {
        // console.log(`%c${this.props.pet.name} is about to mount`, "color:purple;");
    }

    componentDidMount() {
        // console.log(`%c${this.props.pet.name} has mounted`, "color:orange;")
    }
    
    render() {
        const {color, name} = this.props.pet
        // console.log(`The Pet component for ${name} was rendered`)
        return <li style={{color:color}}>I am {name}</li>
    }
}

export default Pet