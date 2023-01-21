import Button from 'react-bootstrap/Button';
import React from 'react';
import ReactDOM from 'react-dom';
import css from './SearchForm.module.css';
import { Dropdown } from "./Dropdown";

export class SearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(event) {
        alert("Successfully submitted!")
    }

    render() {

        return (
            <div>
                <h1 className={css.h3}>Search for your NextWatch </h1>
                <form className={css.searchFormFormatting} action="/search-results">
                    <label name="genre">Select a genre: </label> <br />
                    <select name="genre" id="genre" onChange={(e) => this.setState({ genre: e.target.value })} defaultValue="action">
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
                        <option value="romance">Romance</option>
                        <option value="scienceFiction">Science Fiction</option>
                        <option value="thriller">Thriller</option>
                        <option value="tvMovie">TV Movie</option>
                        <option value="war">War</option>
                        <option value="western">Western</option>
                    </select> <br />

                    <label name={this.state.releaseDate} onChange={(e) => this.setState({ releaseDate: e.target.value })}>
                        Select a release date:
                    <Dropdown />
                    </label>


                    <div name="streamingService" onChange={(e) => this.setState({ streamingService: e.target.value })}>
                        <label>Select your streaming services: </label> <br />
                        <input type="checkbox" name="streamingService" value="netflix" />
                        <label for="streamingService"> Netflix</label><br />
                        <input type="checkbox" name="streamingService" value="hulu" />
                        <label for="streamingService"> Hulu</label><br />
                        <input type="checkbox" name="streamingService" value="disneyplus" />
                        <label for="streamingService"> Disney+</label><br />
                        <input type="checkbox" name="streamingService" value="hbomax" />
                        <label for="streamingService"> HBO Max</label><br />
                        <input type="checkbox" name="streamingService" value="amazonprime" />
                        <label for="streamingService"> Amazon Prime</label><br />
                    </div>

                    <input type="submit" value="Submit" onClick={this.handleClick} />
                </form>
            </div>
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