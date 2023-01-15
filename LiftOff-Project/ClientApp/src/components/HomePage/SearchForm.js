import Button from 'react-bootstrap/Button';
import React from 'react';
import ReactDOM from 'react-dom';
import css from './SearchForm.module.css';
import { Dropdown } from "./Dropdown";

export class SearchForm extends React.Component {

    render() {
        return (
            <form className={css.right}>
                <label name='genre'>Select a genre: </label>
                <select name='genre' id='genre'>
                    <option value="action">Action</option>
                    <option value="adventure">Adventure</option>
                    <option value="animation">Animation</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="documentary">Documentary</option>
                    <option value="drama">Drama</option>
                    <option value="family">Family</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="history">History</option>
                    <option value="horror">Horror</option>
                    <option value="music">Music</option>
                    <option value="mystery">Mystery</option>
                    <option value="romance">Volvo</option>
                    <option value="scienceFiction">Science Fiction</option>
                    <option value="thriller">Thriller</option>
                    <option value="tvMovie">TV Movie</option>
                    <option value="war">War</option>
                    <option value="western">Western</option>
                </select> <br />

                <label name='year'>Select a year: </label><br/>
                <Dropdown />

                <label>Select your streaming services: </label> <br/>
                <input type="checkbox" id="netflix" name="netflix" value="netflix" />
                <label for="netflix"> Netflix</label><br/>
                <input type="checkbox" id="hulu" name="hulu" value="hulu" />
                <label for="hulu"> Hulu</label><br/>
                <input type="checkbox" id="disneyplus" name="disneyplus" value="disneyplus" />
                <label for="disneyplus"> Disney+</label><br />
                <input type="checkbox" id="hbomax" name="hbomax" value="hbomax" />
                <label for="hbomax"> HBO Max</label><br />
                <input type="checkbox" id="amazonprime" name="amazonprime" value="amazonprime" />
                <label for="amazonprime"> Amazon Prime</label><br />

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

//<label name='rated'>Select a rating: </label>
//<select name='rated' id='rated'>
//    <option value="g">G</option>
//    <option value="pg">PG</option>
//    <option value="pg13">PG-13</option>
//    <option value="r">R</option>
//    <option value="nc17">NC-17</option>
//    <option value="nr">Not Rated (NR)</option>
//</select> <br />