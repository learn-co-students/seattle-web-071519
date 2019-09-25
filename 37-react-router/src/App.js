import React from "react";
import "./assets/css/minty.css";
import "./App.css";
import GlassesBrowser from "./components/GlassesBrowser";
import Manager from "./components/Manager";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import GLASSES from "./data";
import Details from './components/Details'

class App extends React.Component {
  state = {
    glasses: []
  };
  componentDidMount() {
    this.setState({ glasses: GLASSES });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Route
            path="/glasses"
            exact
            render={() => <GlassesBrowser glasses={this.state.glasses} />}
          />
          <Route path="/manager" component={Manager} />
          <Route
            path="/glasses/:id"
            render={props => (
              <Details glasses={this.state.glasses} {...props} />
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
