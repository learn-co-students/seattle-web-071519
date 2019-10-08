import React from 'react';
import Characters from './Characters';
import Movies from './Movies';


class MainContainer extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     chars: {
  //       1: {
  //         id: 1,
  //         name: "Castor Troy",
  //         votes: 0,
  //         img: castor
  //       }, 
  //       2: {
  //         id: 2,
  //         name: "H.I. McDunnough",
  //         votes: 0,
  //         img: mcdunnough
  //       },
  //       3: {
  //         id: 3,
  //         name: "Memphis Raines",
  //         votes: 0,
  //         img: memphis
  //       },
  //       4: {
  //         id: 4,
  //         name: "Cameron Poe",
  //         votes: 0,
  //         img: poe
  //       }
  //     }
  //   }
  // }

  // increaseVote = (cageId) => {
  //   this.setState({
  //     chars: {
  //       ...this.state.chars,
  //       [cageId]: {
  //         ...this.state.chars[cageId],
  //         votes: this.state.chars[cageId]['votes'] + 1
  //       }
  //     }
  //   })
  // }

  // decreaseVote = (cageId) => {
  //   this.setState({
  //     chars: {
  //       ...this.state.chars,
  //       [cageId]: {
  //         ...this.state.chars[cageId],
  //         votes: this.state.chars[cageId]['votes'] - 1
  //       }
  //     }
  //   })
  // }

  render() {
    return (
      <main>
        <Characters />
        <Movies />
      </main>
    )
  }
}

export default MainContainer;