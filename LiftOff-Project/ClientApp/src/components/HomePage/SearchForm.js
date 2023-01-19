import Button from 'react-bootstrap/Button';
import React from 'react';
import ReactDOM from 'react-dom';
import css from './SearchForm.module.css';
import { Dropdown } from "./Dropdown";

export class SearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            genre: '',
            releaseDate: '',
            streamingService: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }



    render() {

        return (
            <div>
                <h1 className={css.h3}>Search for your NextWatch </h1>
                <form className={css.searchFormFormatting}>
                <label name="genre">Select a genre: </label> <br />
                    <select value={this.state.genre} id="genre" selected="action" onChange={this.handleSubmit}>
                        <option value={this.state.genre} name="action">Action</option>
                        <option value={this.state.genre} name="adventure">Adventure</option>
                        <option value={this.state.genre} name="animation">Animation</option>
                        <option value={this.state.genre} name="comedy">Comedy</option>
                        <option value={this.state.genre} name="crime">Crime</option>
                        <option value={this.state.genre} name="documentary">Documentary</option>
                        <option value={this.state.genre} name="drama">Drama</option>
                        <option value={this.state.genre} name="family">Family</option>
                        <option value={this.state.genre} name="fantasy">Fantasy</option>
                        <option value={this.state.genre} name="history">History</option>
                        <option value={this.state.genre} name="horror">Horror</option>
                        <option value={this.state.genre} name="music">Music</option>
                        <option value={this.state.genre} name="mystery">Mystery</option>
                        <option value={this.state.genre} name="romance">Romance</option>
                        <option value={this.state.genre} name="scienceFiction">Science Fiction</option>
                        <option value={this.state.genre} name="thriller">Thriller</option>
                        <option value={this.state.genre} name="tvMovie">TV Movie</option>
                        <option value={this.state.genre} name="war">War</option>
                        <option value={this.state.genre} name="western">Western</option>
                    </select> <br />

                    <label value={this.state.releaseDate} onChange={this.handleSubmit}>Select a release date:
                    <Dropdown />
                    </label>


                    <div value={this.state.streamingService} onChange={this.handleSubmit}>
                        <label>Select your streaming services: </label> <br />
                        <input type="checkbox" id="streamingService" name="netflix" value="streamingService" />
                        <label for="netflix"> Netflix</label><br />
                        <input type="checkbox" id="streamingService" name="hulu" value="streamingService" />
                        <label for="hulu"> Hulu</label><br />
                        <input type="checkbox" id="streamingService" name="disneyplus" value="streamingService" />
                        <label for="disneyplus"> Disney+</label><br />
                        <input type="checkbox" id="streamingService" name="hbomax" value="streamingService" />
                        <label for="hbomax"> HBO Max</label><br />
                        <input type="checkbox" id="streamingService" name="amazonprime" value="streamingService" />
                        <label for="amazonprime"> Amazon Prime</label><br />
                    </div>

                    <input type="submit" value="Submit" />
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