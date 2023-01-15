
import React, { Component } from 'react';

export class UserProfile extends Component {
  static displayName = UserProfile.name;

  componentDidMount() {
    document.body.style.background = "white";
  }

  render() {
    return (
      <div>
        <h1>This is the user profile page</h1>
      </div>
    );
  }
}
