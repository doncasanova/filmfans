import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProfileCreate from "./components/ProfileCreate";
import Home from "./components/Home";
import Dummy from "./components/Dummy";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="page">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/profile/create" component={ProfileCreate} />
              <Route exact path="/profile/:id" component={Dummy} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
