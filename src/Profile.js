import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <img src={this.props.picture} className="profile-picture"/>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

export default Profile;
