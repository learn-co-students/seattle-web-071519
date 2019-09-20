import React, { PureComponent } from "react";

class Hello extends PureComponent {

  constructor(props) {
    super();
    this.state = {
      superSecretWord: props.word
    }
  }
  render() {
    console.log("HELLO was rendered");
    return <h1 onClick={()=>this.setState({superSecretWord:"apple"})}>Hello Pets!</h1>;
  }
}

export default Hello;
