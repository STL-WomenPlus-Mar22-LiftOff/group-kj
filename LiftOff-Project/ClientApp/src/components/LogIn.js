import React, { Component } from 'react';

export class LogIn extends Component {
    static displayName = LogIn.name;

    componentDidMount() {
      document.body.style.background = "white";
    }
  
    render() {
      return (
        <div>
            <h1>This is the log in page</h1>
        </div>
      );
    }
  }