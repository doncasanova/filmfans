import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProfileCreate from "./components/ProfileCreate";
import Dummy from "./components/Dummy";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
              <Route exact path="/" component={Dummy} />
              <Route exact path="/profile/create" component={ProfileCreate} />
              <Route exact path="/profile/:id" component={Dummy} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
