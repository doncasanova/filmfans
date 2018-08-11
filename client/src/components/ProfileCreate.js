import React, { Component } from "react";
import API from "../api";

const api = new API();

export default class ProfileCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      city: "",
      films: ["", "", ""],
      step: 1
    }
  }

  handleTextChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  }

  handleFilmChange = (e) => {
    const splitName = e.target.name.split('-');
    const filmNumber = splitName[1];
    const value = e.target.value;

    const changedFilms = [...this.state.films];
    changedFilms[filmNumber] = value;

    this.setState({ films: changedFilms })
  }

  renderDemographicsForm() {
    return (
      <form>
        <h2>Tell us about yourself</h2>

        <label htmlFor="name">Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleTextChange} />
        </label>

        <label htmlFor="city">City:
          <input type="text" name="city" value={this.state.city} onChange={this.handleTextChange} />
        </label>
      </form>
    )
  }

  renderTopFilmsForm() {
    return (
      <form>
        <h2>What are your favorite films?</h2>

        { this.state.films.map((film, index) => (

          <label key={index} htmlFor={film+"-"+index}>Film #{index + 1}:
            
            <input type="text" name={film+"-"+index} value={film} onChange={this.handleFilmChange} />
          
          </label>
       
        ))}

      </form>
    )
  }

  renderConfirmationForm() {
    return (
      <div>
        <h2>Confirmation</h2>
        <ul>
          <li>Name: {this.state.name}</li>
          <li>City: {this.state.city}</li>
          <li>Favorite Films: 
            <ul>
              { this.state.films.map((film) => <li key={film}>{film}</li> ) }
            </ul>
          </li>
        </ul>
      </div>
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
        <h1>Create your profile</h1>

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