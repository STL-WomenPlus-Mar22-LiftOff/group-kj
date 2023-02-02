import React from 'react';
import { Table } from 'reactstrap';
import Axios from 'axios';


export class SearchTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = { movies: [] }
    this.state = { genres: [] }
  
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
          movies: responseArr[0].data,
          genres: responseArr[1].data
        });
      });
     // Axios.get(`${apiUrl}${}`)

    if (!this.state.movies || !this.state.genres) { return null }

  }
   addToWatchlist = (name) => {
    //const url = 'https://localhost:44413/watchlist';
  
    /*Axios(url, userInfo)
        .then((result) => {
            if (result) {
                this.setState({ message: 'Added!' })
            }
        })*/
      const url = 'https://localhost:44413/watchlist';
  
    let userInfo = {

      name: "",
      movieId: 0,
    };
    Axios(url, userInfo)
        .then((result) => {
            if (result) {
                this.setState({ message: 'Added!' })
            }
        })
       //var array = [];
      //array = name.split(',');
        /*const movie = {
          title: 'Shrek Stories',
          genres: ['Family']
        };
        fetch('/watchlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(movie)
        })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error(error));*/


      alert(name);
      //alert(movieId);
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
      console.log(this.state.movies);
      console.log(this.state.movies.results)

      return (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Genre</th>
                <th>Add to watchlist</th>
              </tr>
            </thead>
            <tbody>

              {this.state.movies.results.map(movieHit => {
                let thisHitsGenres = [];
                console.log(thisHitsGenres)
                for (let i = 0; i < movieHit.genre_ids.length; i++) {
                  for (let j = 0; j < this.state.genres.genres.length; j++){
                    if (movieHit.genre_ids[i] === this.state.genres.genres[j].id) {
                      thisHitsGenres.push(`${this.state.genres.genres[j].name} `);
                    }
                  }
                } console.log(thisHitsGenres)
                return (
                  <tr key={movieHit.id}>
                    <td key={`${movieHit.id}title`}>{movieHit.title}</td>
                    <td key={`${movieHit.id}genre`}>{thisHitsGenres}</td>
                    <td hidden="true" key={`{movieHit.id}moviedid`}> {movieHit.id}</td>
                    <td>
                    <button onClick={() => this.addToWatchlist(`${movieHit.title}, ${movieHit.id}`)}>
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