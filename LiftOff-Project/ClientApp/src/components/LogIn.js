import React, { Component } from 'react';
import { redirect } from 'react-router-dom';

export class LogIn extends Component {
    static displayName = LogIn.name;

    onLogIn = () => {
        alert('Log in clicked!');
        
    }

    render() {
      return (
          
            <h1><button type="submit">Log in</button></h1>
      
      );
    }
  }