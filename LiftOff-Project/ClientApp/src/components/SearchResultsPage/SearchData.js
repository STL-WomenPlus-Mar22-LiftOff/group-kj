/*import React, { Component, useEffect, useState } from "react";
import Axios from "axios";

const bearer = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjcxMjdmMTRjYWNhODM5ZWY0MmQyMmEyM2RjZWZkZSIsInN1YiI6IjYzYWI5MTU3Njk5ZmI3MDBhNzU0NDEyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wMsItq5wH6JD3RkfdsW-zCVPjOCrLjY-NcQXfkirVD4"
const apiUrl = "https://api.themoviedb.org/3/";
const searchMovies = "search/movie"
const andQuer = "&query="
const andPage = "&page="
const apiKey = "?api_key=627127f14caca839ef42d22a23dcefde";

const genreList = "genre/movie/list"
//https://api.themoviedb.org/3/genre/movie/list

export class TMDBSearchData extends Component(searchString) {
  const [Post, setPost] = React.useState(null);
  
//GET Movie hits
  React.useEffect(() => {
    Axios.all([
      Axios.get(`${apiUrl}${searchMovies}${apiKey}${andQuer}${searchString}${andPage}1`,
        config
      ),
      Axios.get(`${apiUrl}${genreList}${apiKey}`,
        config
      )
    ])
    .then((responseArr) => {
      setPost(responseArr);
    });  
  });

  if (!Post) return null;

  const movieResults = Post["0"].data.results;
  const genreResults = Post["1"].data.genres;
 
  // console.log(movieResults);
  console.log(genreResults[0].id);
  
  return (
    <div>
    <h1>results</h1>
    <table>
      <tr>
        <th>Name</th>
        <th>Genre</th>
      </tr>
      
      
      {
        movieResults.map(function(hits) {
          let thisHitsGenres = [];
          //console.log(thisHitsGenres)
          for (let i = 0; i < hits.genre_ids.length; i++) {
            for (let j = 0; j < genreResults.length; j++) {
              
              if (hits.genre_ids[i] === genreResults[j].id) {
                thisHitsGenres.push(genreResults[j].name);
              }
            }
          } //console.log(thisHitsGenres)
          return (
            <tr>
                <td>{hits.title}</td>
                <td>{thisHitsGenres}</td>
              </tr>
          )
        })
      } 
    </table>
    </div>
  )
}
*/