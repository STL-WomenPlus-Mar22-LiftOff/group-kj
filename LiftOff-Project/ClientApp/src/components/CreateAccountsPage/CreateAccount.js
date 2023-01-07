import React, { Component } from 'react';
import { Header } from "./Header";
import { Registration } from './Registration';
import './CreateAccount.css';

export class CreateAccount extends Component {
  static displayName = CreateAccount.name;

  render() {
    return (
      <div class="format">
        <Header />
        <Registration />
      </div>
    );
  }
}