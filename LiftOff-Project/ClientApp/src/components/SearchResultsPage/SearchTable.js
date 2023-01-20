import React from 'react';
import { Table } from 'reactstrap';
import Axios from 'axios';

export class SearchTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = { posts: [] }
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
        this.setState({ posts: [responseArr[0].data, responseArr[1].data] });
      });
      
    if (!this.state.posts) {return null}

  }



  render() {

    if (this.state.posts === null) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      )
    }

    else {
      console.log(this.state.posts[0])
      console.log(this.state.posts[1])
      
      return (
        <div>
          {this.state.posts.map(post =>

            <div>
              <script>console.log(post)</script>
            </div>
          )}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Genre</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>:(</td>
              </tr>
            </tbody>
          </Table>
        </div>
      );
    }
  }
}