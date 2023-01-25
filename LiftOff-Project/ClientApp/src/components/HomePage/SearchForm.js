import React from 'react';
import css from './SearchForm.module.css';
import DatePicker from 'react-date-picker';

export class SearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                releaseDate: '',
            },
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleClick(event) {
        alert(`Successfully submitted!`)
    }

    handleDateChange(selectedDate) {
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                releaseDate: selectedDate
            }
        }));
    }

    render() {
        return (
            <div>
                <h2 className={css.h2}>Search for your NextWatch!</h2>
                <form className={css.searchFormFormatting} action="/search-results">
                    <label name="genre">Select a genre: &nbsp; </label>
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

                    <label name="releaseDate">Select a release date: &nbsp;
                        <DatePicker className={css.picker}
                            name="releaseDate"
                            value={this.state.formData.releaseDate}
                            onChange={this.handleDateChange}
                        />
                    </label>

                    <div name="streamingService" onChange={(e) => this.setState({ streamingService: e.target.value })}>
                        <label>Select your streaming service(s): </label> <br />
                        <div className={css.checkboxes}>
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
                    </div>

                    <input type="submit" value="Submit" className={css.sub} onClick={this.handleClick} />
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