
import React, { Component } from 'react';

export class UserProfile extends Component {
  static displayName = UserProfile.name;

  componentDidMount() {
    document.body.style.background = "white";
  }

  render() {
    return (
      <div>
            <h1>Welcome {window.user} !. Your User Id is {window.userid}</h1>
      </div>
    );
  }
}
