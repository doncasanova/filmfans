import React, { Component } from "react"

export default class Dummy extends Component {
  render() {
    // this.props.match is passed to this component by <Route> (aka React Router)
    const matchedPath = (this.props.match) ? " matching Route " + this.props.match.path : "";
    return (
      <p>Hey! this is the Dummy component {matchedPath}</p>
    )
  }
}