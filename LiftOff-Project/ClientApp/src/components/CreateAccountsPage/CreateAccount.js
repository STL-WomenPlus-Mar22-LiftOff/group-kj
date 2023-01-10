import React, { Component } from 'react';
import { RegistrationForm } from './RegistrationForm';
import css from './CreateAccount.module.css';

export class CreateAccount extends Component {
  static displayName = CreateAccount.name;

  render() {
    return (
      <div className={css.format}>
        <RegistrationForm />
      </div>
    );
  }
}