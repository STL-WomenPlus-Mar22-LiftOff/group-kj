import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

const WatchList = () => {

    const [userMovieList, setUserMovies] = useState([])
    console.log(window.userid)
    const bearer = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjcxMjdmMTRjYWNhODM5ZWY0MmQyMmEyM2RjZWZkZSIsInN1YiI6IjYzYWI5MTU3Njk5ZmI3MDBhNzU0NDEyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wMsItq5wH6JD3RkfdsW-zCVPjOCrLjY-NcQXfkirVD4";
    const apiUrl = "https://api.themoviedb.org/3/";
    const apiKey = "?api_key=627127f14caca839ef42d22a23dcefde";
    const config = {
        headers: { Authorization: `Bearer ${bearer}` }
    }

    useEffect(() => {
        document.body.style.backgroundColor = "white";
        const movieRequests = [];
        let userMovieData = [];

        axios.get(`usermovieid/${window.userid}`)
            .then((results) => {
                return results.data;
            })
            .then(data => {
                console.log(data);
                const movieData = data;
                for (let i = 0; i < movieData.length; i++) {
                    movieRequests.push(axios.get(`${apiUrl}movie/${movieData[i].apiMovieId}${apiKey}`, config))
                }
                axios.all(movieRequests).then(movieResults => {
                    userMovieData = movieResults;
                    setUserMovies(userMovieData)
                    return userMovieData;
                })

            })
    }, [])

    if (userMovieList.length === 0) {
        return (
            <div>
                <h1>Hello {window.user}</h1>
                <h2>Loading...</h2>
            </div>
        )

    } else {
        return (
            console.log(userMovieList),
            <div>
                <h1>Hello {window.user}!</h1>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            {/* <th>Streaming</th>
                            <th>Rent</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {userMovieList.map(movie => {
                            console.log(movie.data);
                            return (
                                <tr key={`${movie.data.id}`}>
                                    <td key={`${movie.data.id}name`}>{movie.data.title}</td>
                                    <td key={`${movie.data.id}desc`}>{movie.data.overview}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default WatchList