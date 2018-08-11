import React, { Component } from "react";
import API from "../api";

const api = new API();

export default class ProfileCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      city: "",
      films: [],
      step: 1
    }
  }

  renderDemographicsForm() {
    return (
      <p>Demographics Form</p>
    )
  }

  renderTopFilmsForm() {
    return (
      <p>Top Films Form</p>
    )
  }

  renderConfirmationForm() {
    return (
      <p>Confirmation</p>
    )
  }

  handleNavForwardClick = (e) => {
    this.setState( {step: this.state.step + 1} );
  }

  handleNavBackClick = (e) => {
    this.setState( {step: this.state.step - 1} );
  }

  handleProfileCreate = (e) => {
    api.saveFan({
      name: this.state.name,
      city: this.state.city,
      films: this.state.films
    });

    this.props.history.push('/');
  }

  render() {
    return (
      <div className="profile-create">
        { this.state.step === 1 && this.renderDemographicsForm()}

        { this.state.step === 2 && this.renderTopFilmsForm()}

        { this.state.step === 3 && this.renderConfirmationForm()}

        <div className="wizard-nav">
          { this.state.step > 1 && 
            <button type="button" onClick={this.handleNavBackClick}>Previous</button>
          }

          { this.state.step < 3 && 
            <button type="button" onClick={this.handleNavForwardClick}>Next</button>
          }

          { this.state.step === 3 &&
            <button type="button" onClick={this.handleProfileCreate}>Create Profile</button>
          }
        </div>
      </div>
    )
  }
}