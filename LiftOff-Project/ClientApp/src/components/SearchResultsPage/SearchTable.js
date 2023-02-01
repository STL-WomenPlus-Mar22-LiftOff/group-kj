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

    addToWatchlist = async (movieid,userid) => {
        const url = `usermovieid/`;  //API controller URL
        var ifExists = false;
        fetch(`usermovieid/${userid}`, {  //this is fetching from the Login API controller to pull a specific user for the email entered
            method: 'GET',
            headers: { 'Content-type': 'application/json' },

        }).then(r => r.json()).then(res => {
            //console.log(res[0]['apiMovieId']);
            if (res.length > 0) {
                console.log("here");
                for (var i = 0; i < res.length; i++) {
                    //console.log(i);
              //      console.log("inside for", i);
                //    console.log(res[i]['apiMovieId']); 
                  //  console.log(movieid);
                    if (res[i]['apiMovieId'] == movieid) {
                        ifExists = true;
                            alert('This already exists!!');

                        }
                    }
                } 
            
        })
        
        if (!ifExists) {
            let movieinfo = {
            UserId: userid,
            APIMovieId: movieid
        };

        await Axios.post(url, movieinfo);  //this is adding the newly created user to the database
        alert("Added to the watchlist");
        }
        

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
                    <td>
                            <button onClick={() => this.addToWatchlist(`${movieHit.id}`,`${window.userid}`)}>Add</button>
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


//I worked on searchtable.js
//Usermovieidcontroller.
// [HttpGet("{userid}")]
/*       public IEnumerable < UserMovieId > GetMovieIdForUser(int userid)
{

    IEnumerable < UserMovieId > UserMovie = _userMovieIdContext.UserMovies
        .Where(js => js.UserId == userid)
        .ToList();
    return UserMovie;
}

[HttpPost]
        public async Task < ActionResult < UserMovieId >> PostUserMovieId(UserMovieId userMovieid)
{

    _userMovieIdContext.UserMovies.Add(userMovieid);

    await _userMovieIdContext.SaveChangesAsync();
    return Ok();
}*/