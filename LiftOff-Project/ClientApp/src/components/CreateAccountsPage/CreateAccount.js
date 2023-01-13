import React, { Component } from 'react';
import { RegistrationForm } from './RegistrationForm';
import css from './CreateAccount.module.css';

export class CreateAccount extends Component {
  static displayName = CreateAccount.name;

  componentDidMount() {
    document.body.style.background = "rgb(1, 1, 70)";
  }

  render() {
    return (
      <div className={css.format}>
        <RegistrationForm />
      </div>
    );
  }
}