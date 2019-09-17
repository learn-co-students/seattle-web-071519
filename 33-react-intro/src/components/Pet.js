import React, { Component } from 'react'

class Pet extends Component {
    render() {
        const {color, name} = this.props.pet
        return <li style={{color:color}}>I am {name}</li>
    }
}

export default Pet