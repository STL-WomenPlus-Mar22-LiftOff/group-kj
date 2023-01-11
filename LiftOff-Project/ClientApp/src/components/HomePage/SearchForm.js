﻿import Button from 'react-bootstrap/Button';
import React from 'react';
import ReactDOM from 'react-dom';
import css from './SearchForm.module.css';

export class SearchForm extends React.Component {

    render() {
        return (
            <form className={css.right}>
                <label> Genre:
              <input type="text" name="genre" />
                </label>
                <label> Rating
              <input type="text" name="rating" />
                </label>
                <label> Year Released:
              <input type="text" name="yearreleased" />
                </label>
                <label> Streaming Services:
              <input type="text" name="genre" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

//need to create a search form that allows for searching the database
//search form will need to include genre (drop down list), rating (drop down list), year released (text boxes for range), and streaming services (check boxes).

//Enter Search Info
//genre <box>
//rating <box>
//year released <two input boxes>
//streaming services <check boxes to select>
//submit button