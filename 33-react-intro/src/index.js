import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

// document.body.innerHTML = "<h1>Hello 071519!</h1>" 
// const greeting = document.createElement("h1")
// greeting.textContent = "Hello 071519! I'm a created element!"
// document.getElementById("root").appendChild(greeting)

// let ReactElement = React.createElement("h1", null, "Hello From React")
// let myManualObject = {
//     $$typeof: Symbol.for("react.element"),
//     key: null,
//     props: {
//         children: "Hello from a random object literal"
//     },
//     ref: null,
//     type: "h3",
//     _owner: null
// }
// console.log(myManualObject)

ReactDOM.render(<App />, document.getElementById("root"))


