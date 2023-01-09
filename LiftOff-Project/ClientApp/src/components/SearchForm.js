import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from 'react-bootstrap/Button';
import React from 'react';
import ReactDOM from 'react-dom';
import './SearchForm.css';

export class SearchForm extends React.Component {
    render() {
      return (
          <form class="right">
              <label>
                  Name:
              <input type="text" name="name" />
              </label>
              <input type="submit" value="Submit" />
          </form>
        );
    }
}
