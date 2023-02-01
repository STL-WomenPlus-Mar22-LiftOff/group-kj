import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';

export const WatchList = () => {

    const [userMovieList, setUserMovies] = useState([])

    useEffect(() => {
        fetch(`UserMovieId/${window.userid}`)
            .then((myMoviesResults) => {
                console.log(myMoviesResults)
                return myMoviesResults.json();
            })
            .then((myMovies) => {
                console.log(myMovies)
            })
    })
    return (
        <h1>Hello!</h1>
    )
}
export default WatchList