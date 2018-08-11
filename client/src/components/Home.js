import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../api";

const api = new API();

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: []
    }
  }

  componentDidMount() {
    const profilesFromApi = api.getFans();

    this.setState({ profiles: profilesFromApi });
  }

  render() {
    return (
      <div>
        <h1>Welcome to FilmFans!</h1>
        <Link to="/profile/create">Create a profile</Link>

        <h2>Our user profiles</h2>
        <ul>
          { this.state.profiles.map((profile) => {
            return (profile.name) ? 
              <li key={profile.name}>
                <Link to={"/profile/" + profile.name}>
                  {profile.name}
                </Link>
              </li>

              : null
          })}
        </ul>
      </div>
    )
  }
}