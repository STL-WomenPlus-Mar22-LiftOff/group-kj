import React from 'react';
import { Table } from 'reactstrap';
import Axios from 'axios';

export class SearchTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = { movies: [] }
    this.state = { genres: [] }
    this.state = { moviesAttachedToStreamers: [] }
    this.state = { streamers: [] }
  }

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
          movies: responseArr[0].data,
          genres: responseArr[1].data
        });
        return responseArr[0].data
      })
      .then((movieResponse) => {
        let moviesAndStreamers = [];
        movieResponse.results.forEach(movieForStreamer => {
          Axios.get(`${apiUrl}movie/${movieForStreamer.id}/watch/providers${apiKey}`, config).then((attachment) => {
            moviesAndStreamers.push(attachment.data)
            this.setState({ moviesAttachedToStreamers: moviesAndStreamers })
          })
        });
        return moviesAndStreamers
      })/*.then((response) => {
        console.log(response)
        response.forEach(movieAndStreamer => {
          //These arrays store
          //flatoptions are in the API as "flatrate", but mean subscriptions that carry the movie without requiring rental
          let flatOptions = ["flatrate"];
          //i.e. Amazon Prime sells it, as opposed to streaming it with prime
          let rentOptions = ["rent"];

          //if there is no streaming service OR rental data, which actually happened a lot
          if (!movieAndStreamer.results.US) {
            this.setState({streamers: [...[movieAndStreamer.results.id, "This movie had no streaming service data"]]})
            return //So that it doesn't try the rest of the loop
          } else if (movieAndStreamer.results.US.flatrate) { //if the movie has a subscription iterate through them and add them to an array
            movieAndStreamer.results.US.flatrate.forEach(flats => {
              flatOptions.push(flats.provider_name);
            })//following line is nested to add rentals IF there are flat rate services AND rentals
            if (movieAndStreamer.results.US.rent) {
              //I only want 3 rental options, the API automatically prioritizes more popular services
              for (let i = 0; i < 3; i++) {
                rentOptions.push(movieAndStreamer.results.US.rent[i].provider_name);
              } this.setState({streamers: [...[movieAndStreamer.results.id, flatOptions, rentOptions]]});
              //
              //this.state.streamers.push([movieAndStreamer.results.id, flatOptions, rentOptions]);
              //
              return //So that we don't add the rental options again, because if it has them it will.
            } else if (!movieAndStreamer.results.US.rent) {
              this.setState({streamers: [...[movieAndStreamer.id, flatOptions, "No services have rentals available"]]});
              return
            } //ELSE IF there are no subscription services:
          } else if (movieAndStreamer.results.US.rent) {
            for (let i = 0; i < 3; i++) {
              rentOptions.push(movieAndStreamer.results.US.rent[i].provider_name)
            }
            this.setState({streamers: [...[movieAndStreamer.results.id, "No subscription services have this movie", rentOptions]]})
            return
          }
        });*/


    //https://api.themoviedb.org/3/movie/550/watch/providers?api_key={{TMDB_API_KEY}}&append_to_response=watch/providers/
    if (!this.state.movies || !this.state.genres) { return null }

  }



  render() {

    if (this.state.movies === undefined || this.state.genres === undefined) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      )
    }

    else {
      console.log(this.state.moviesAttachedToStreamers)
      console.log(this.state.streamers)
      console.log(this.state.movies);
      console.log(this.state.movies.results)


      return (
        <div>
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
                this.state.moviesAttachedToStreamers.forEach(serviceFull => {
                  if (serviceFull.id === movieHit.id) {
                    if (serviceFull.results.US && (serviceFull.results.US.flatrate || serviceFull.results.US.rent)) {
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
                    } else {
                      thisHitsStreamingServices.push("No streaming found");
                      thisHitsRentals.push("No rentals available");
                    }
                  }
                })
                return (
                  <tr key={movieHit.id}>
                    <td key={`${movieHit.id}title`}>{movieHit.title}</td>
                    <td key={`${movieHit.id}genre`}>{thisHitsGenres}</td>
                    <td key={`${movieHit.id}stream`}>thisHitsStreamingServices</td>
                    <td key={`${movieHit.id}rent`}>thisHitsRentals</td>
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