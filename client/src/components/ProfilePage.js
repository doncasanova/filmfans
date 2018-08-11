import React, { Component } from "react";
import API from "../api";

const api = new API();

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {},
      error: false
    }
  }

  componentDidMount() {
    const profileFromApi = api.getFanByName(this.props.match.params.id);

    if (profileFromApi) {
      this.setState({ profile: profileFromApi })
    } else {
      this.setState({ error: true });
    }
  }

  renderProfile(profile) {
    return (
      <div>
        <h1>{profile && profile.name}</h1>

        <ul>
          <li>City: {profile && profile.city}</li>
          <li>Favorite Films:
            <ul>
              { profile && profile.films && profile.films.map((film) => <li key={film}>{ film }</li> ) }
            </ul>
          </li>
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div>
        { this.state.error ? 
          <h1>Error: profile not found</h1>
          : this.renderProfile(this.state.profile)
        }
      </div>
    )
  }
}