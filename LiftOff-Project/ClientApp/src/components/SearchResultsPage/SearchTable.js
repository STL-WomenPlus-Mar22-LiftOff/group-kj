import React from 'react';
import { Table } from 'reactstrap';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import css from '../HomePage/Home.module.css';

const homeBackground = {
    backgroundImage: "url('./movies.jpg')",
    backgroundSize: 'cover',
}

export class SearchTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = { movies: [] }
        this.state = { genres: [] }
        this.state = { moviesAttachedToStreamers: [] }
        this.state = { streamers: [] }
    }
    //Users ID
    //GET from our databse : UserWatchlist && watchlistmovieid
    //Loop with axios to 

    //

    async componentDidMount() {
        //const [Post, setPost] = React.useState(null);
        document.body.style.background = "white";
        //these will be in every request
        const bearer = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjcxMjdmMTRjYWNhODM5ZWY0MmQyMmEyM2RjZWZkZSIsInN1YiI6IjYzYWI5MTU3Njk5ZmI3MDBhNzU0NDEyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wMsItq5wH6JD3RkfdsW-zCVPjOCrLjY-NcQXfkirVD4";
        const apiUrl = "https://api.themoviedb.org/3/";
        const apiKey = "?api_key=627127f14caca839ef42d22a23dcefde";
        //this is the setup for the search results
        const searchMovies = "search/movie";
        const andQuer = "&query=";
        const andPage = "&page=";


        //Gets genre data to add to movie data
        const genreList = "genre/movie/list";

        const config = {
            headers: { Authorization: `Bearer ${bearer}` }
        }
        let searchString = window.searchTerm;

        // 
        //   Change to just get movies.then do the big axios request
        //     
        let awaitStreamResponse = [];
        let movieResponse;
        let genreResponse;

        const getAll = async () => {
            let promises = [];
            let movieGet = await Axios.get(
                `${apiUrl}${searchMovies}${apiKey}${andQuer}${searchString}${andPage}1`,
                config
            )
            let movieResults = movieGet.data
            movieResponse = movieResults;
            let moviesAndStreamers = [Axios.get(`${apiUrl}${genreList}${apiKey}`, config)];
            let movieStreamerData = [];
            movieResponse.results.forEach(movieForStreamer => {
                moviesAndStreamers.push(Axios.get(`${apiUrl}movie/${movieForStreamer.id}/watch/providers${apiKey}`, config))
            })
            let genreAndStreamResp = await Axios.all(moviesAndStreamers).then(finalResp => {
                //console.log(finalResp)
                genreResponse = finalResp[0].data;
                for (let i = 1; i < finalResp.length; i++) {
                    movieStreamerData.push(finalResp[i].data)
                }
                awaitStreamResponse = movieStreamerData;
                // console.log(movieResponse)
                // console.log(genreResponse)
                // console.log(awaitStreamResponse)
                return movieStreamerData;
            })
            this.setState({
                movies: movieResponse,
                genres: genreResponse,
                moviesAttachedToStreamers: awaitStreamResponse
            })
        }
        console.log(movieResponse, genreResponse, awaitStreamResponse)
        //const streamingResponseOccured = streamingResponse();
        //if(awaitStreamResponse.length !== 0) {
        getAll();

        //}

        //https://api.themoviedb.org/3/movie/550/watch/providers?api_key={{TMDB_API_KEY}}&append_to_response=watch/providers/
        if (!this.state.movies || !this.state.genres || !this.state.moviesAttachedToStreamers) { return null }

    }



    render() {

        if (this.state.movies === undefined || this.state.genres === undefined /*|| this.state.moviesAttachedToStreamers === null*/) {
            return (
                <div>
                    <h1>Loading...</h1>
                </div>
            )
        }

        else {
            // console.log(this.state.genres)
            console.log(this.state.movies);
            console.log(this.state.moviesAttachedToStreamers)
            console.log(this.state.moviesAttachedToStreamers[0])
            // //console.log(this.state.streamers)

            // console.log(this.state.movies.results)


            return (
                <div>
                    <h1 className={css.h1}>Here are your search results: <Link to="/user-profile"><Button variant="primary">Search again!</Button>{' '}</Link></h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Genre</th>
                                <th>Streaming</th>
                                <th>Rent</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.state.movies.results.map(movieHit => {
                                let thisHitsGenres = [];
                                let thisHitsStreamingServices = [];
                                let thisHitsRentals = [];
                                for (let i = 0; i < movieHit.genre_ids.length; i++) {
                                    for (let j = 0; j < this.state.genres.genres.length; j++) {
                                        if (movieHit.genre_ids[i] === this.state.genres.genres[j].id) {
                                            thisHitsGenres.push(`${this.state.genres.genres[j].name} `);
                                        }
                                    }
                                }
                                for (let i = 0; i < this.state.moviesAttachedToStreamers.length; i++) {
                                    //console.log(this.state.moviesAttachedToStreamers[i].id)
                                }
                                this.state.moviesAttachedToStreamers.forEach(test => {
                                    //console.log(test.id)
                                })
                                this.state.moviesAttachedToStreamers.forEach(serviceFull => {
                                    //console.log(serviceFull.id)
                                    if (serviceFull.id === movieHit.id) {
                                        if (!serviceFull.results.US) {
                                            thisHitsStreamingServices.push("No streaming found");
                                            thisHitsRentals.push("No rentals found");
                                        } else if (serviceFull.results.US && (serviceFull.results.US.flatrate || serviceFull.results.US.rent)) {
                                            if (serviceFull.results.US.flatrate) {
                                                serviceFull.results.US.flatrate.forEach(service => {
                                                    thisHitsStreamingServices.push(service.provider_name);
                                                })
                                            } if (!serviceFull.results.US.flatrate) {
                                                thisHitsStreamingServices.push("No streaming found");
                                            } if (serviceFull.results.US.rent) {
                                                for (let i = 0; i < 3 && i < serviceFull.results.US.rent.length; i++) {
                                                    thisHitsRentals.push(serviceFull.results.US.rent[i].provider_name);
                                                }
                                            } if (!serviceFull.results.US.rent) {
                                                thisHitsRentals.push("No rentals available");
                                            }
                                        }
                                    }
                                })
                                return (
                                    <tr key={movieHit.id}>
                                        <td key={`${movieHit.id}title`}>{movieHit.title}</td>
                                        <td key={`${movieHit.id}genre`}>{thisHitsGenres}</td>
                                        <td key={`${movieHit.id}stream`}>{thisHitsStreamingServices}</td>
                                        <td key={`${movieHit.id}rent`}>{thisHitsRentals}</td>
                                        <td>
                                            <button onClick={() => this.addToWatchlist(`${movieHit.id}`)}>
                                                Save
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </div>
            )
        }
    }
}