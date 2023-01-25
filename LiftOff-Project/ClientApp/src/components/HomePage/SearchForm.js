import React from 'react';
import css from './SearchForm.module.css';
import DatePicker from 'react-date-picker';
import Axios from 'axios';

export class SearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                releaseDate: '',
                movies: [],
                genres: [],
                genreID: 0,
            },

            loading: true
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

async componentDidMount() {
    //const [Post, setPost] = React.useState(null);
    document.body.style.background = "white";
    const bearer = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjcxMjdmMTRjYWNhODM5ZWY0MmQyMmEyM2RjZWZkZSIsInN1YiI6IjYzYWI5MTU3Njk5ZmI3MDBhNzU0NDEyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wMsItq5wH6JD3RkfdsW-zCVPjOCrLjY-NcQXfkirVD4";
    const apiUrl = "https://api.themoviedb.org/3/";
    const searchMovies = "search/movie";
    const andQuer = "&query=";
    const andPage = "&page=";
    const apiKey = "?api_key=627127f14caca839ef42d22a23dcefde";
    const genreList = "genre/movie/list";

    const config = {
      headers: { Authorization: `Bearer ${bearer}` }
    }
    let searchString = "shrek";

    Axios.all([
        Axios.get(`${apiUrl}${searchMovies}${apiKey}${andQuer}${searchString}${andPage}1`,
            config
        ),
        Axios.get(`${apiUrl}${genreList}${apiKey}`,
            config
        )
    ])
        .then((responseArr) => {
            this.setState({
                genres: responseArr[1].data,
                loading: false
            });
        });
    // Axios.get(`${apiUrl}${}`)

    if (!this.state.genres) { return null }

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

    handleGenreChange(selectedGenre) {
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                genreID: selectedGenre
            }
        }));
    }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <h2 className={css.h2}>Search for your NextWatch!</h2>
                <form className={css.searchFormFormatting} action="/search-results">
                    <label name="genre">Select a genre: &nbsp; </label>
                    <select name="genre"
                        value={this.state.formData.genreID}>
                        onChange={this.handleDateChange}
                        {this.state.genres.genres.map(genre => (
                            <option key={genre.id} value={genre.id}>
                                {genre.name}
                            </option>
                        ))}
                    </select>

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

//<label name="genre">Select a genre: &nbsp; </label>
//                    <select name="genre" id="genre" onChange={(e) => this.setState({ genre: e.target.value })} defaultValue="action">
//                        <option value="action">Action</option>
//                        <option value="adventure">Adventure</option>
//                        <option value="animation">Animation</option>
//                        <option value="comedy">Comedy</option>
//                        <option value="crime">Crime</option>
//                        <option value="documentary">Documentary</option>
//                        <option value="drama">Drama</option>
//                        <option value="family">Family</option>
//                        <option value="fantasy">Fantasy</option>
//                        <option value="history">History</option>
//                        <option value="horror">Horror</option>
//                        <option value="music">Music</option>
//                        <option value="mystery">Mystery</option>
//                        <option value="romance">Romance</option>
//                        <option value="scienceFiction">Science Fiction</option>
//                        <option value="thriller">Thriller</option>
//                        <option value="tvMovie">TV Movie</option>
//                        <option value="war">War</option>
//                        <option value="western">Western</option>
//                    </select> <br />