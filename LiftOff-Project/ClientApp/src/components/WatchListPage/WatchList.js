import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';
import css from './WatchList.module.css'
import { LogOut } from '../LogOut/LogOut';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export const WatchList = () => {

    const [userMovieList, setUserMovies] = useState([]);
    const [userStreamers, setUserStreamers] = useState([])

    //console.log(window.userid)
    const bearer = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjcxMjdmMTRjYWNhODM5ZWY0MmQyMmEyM2RjZWZkZSIsInN1YiI6IjYzYWI5MTU3Njk5ZmI3MDBhNzU0NDEyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wMsItq5wH6JD3RkfdsW-zCVPjOCrLjY-NcQXfkirVD4";
    const apiUrl = "https://api.themoviedb.org/3/";
    const apiKey = "?api_key=627127f14caca839ef42d22a23dcefde";
    const genreList = "genre/movie/list";
    const config = {
        headers: { Authorization: `Bearer ${bearer}` }
    }

    const navigate = useNavigate();

    const searchResultsClick = () => {
        navigate("/search-table");
    };

    const userProfileClick = () => {
        navigate("/user-profile");
    };

    useEffect(() => {
        document.body.style.background = "white";
        const movieRequests = [];
        const streamerRequests = [];
        let userMovieData = [];
        let userStreamerData = [];
        let userGenreData = [];

        axios.get(`usermovieid/${window.userid}`)
            .then((results) => {
                return results.data;
            })
            .then(data => {
                const movieData = data;
                for (let i = 0; i < movieData.length; i++) {
                    movieRequests.push(axios.get(`${apiUrl}movie/${movieData[i].apiMovieId}${apiKey}`, config))
                    streamerRequests.push(axios.get(`${apiUrl}movie/${movieData[i].apiMovieId}/watch/providers${apiKey}`, config))
                }
                axios.all(movieRequests).then(movieResults => {
                    userMovieData = movieResults;
                    setUserMovies(userMovieData);
                    return userMovieData;
                })
                axios.all(streamerRequests).then(streamerResults => {
                    userStreamerData = streamerResults;
                    setUserStreamers(userStreamerData);
                    return userStreamerData;
                })

            })
    }, [])



    if (userMovieList.length === 0 || userStreamers.length === 0) {
        return (
            <div>
                <h1>Hello {window.user}</h1>
                <h2>It appears there is no watchlist...</h2>
            </div>
        )

    } else {
        console.log(userMovieList);
        let renderItems = [];
        for (let i = 0; i < userMovieList.length; i++) {
            let streamResponseEach;
            let genreResponseEach = "";

            if (!userStreamers[i].data.results.US) {
                streamResponseEach = "No streamers found"
            } else {
                if (userStreamers[i].data.results.US.flatrate) {
                    streamResponseEach = "Stream at:"
                    for (let f = 0; f < userStreamers[i].data.results.US.flatrate.length; f++) {
                        if (f < (userStreamers[i].data.results.US.flatrate.length - 1)) {
                            streamResponseEach += ` ${userStreamers[i].data.results.US.flatrate[f].provider_name},`;
                        } else {
                            streamResponseEach += ` ${userStreamers[i].data.results.US.flatrate[f].provider_name}\n`;
                        }
                    }
                    if (userStreamers[i].data.results.US.rent) {
                        streamResponseEach += "\nRent at:";
                        for (let j = 0; j < 3; j++) {
                            streamResponseEach += ` ${userStreamers[i].data.results.US.rent[j].provider_name},`;
                        }
                    }
                } else if (userStreamers[i].data.results.US.rent && !userStreamers[i].data.results.US.flatrate) {
                    streamResponseEach = "Rent at:"
                    for (let j = 0; j < 5; j++) {
                        streamResponseEach += ` ${userStreamers[i].data.results.US.rent[j].provider_name},`;
                    }
                } else {
                    streamResponseEach = "Only available for purchase"
                }
            }

            for (let g = 0; g < userMovieList[i].data.genres.length; g++) {
                if (g === userMovieList[i].data.genres.length - 1) {
                    genreResponseEach += userMovieList[i].data.genres[g].name;
                } else {
                    genreResponseEach += `${userMovieList[i].data.genres[g].name}, `
                }
            }
            if (!genreResponseEach) {
                genreResponseEach = "No genre data found."
            }


            renderItems.push(
                <tr key={`${userMovieList[i].data.id}`}>
                    <td key={`${userMovieList[i].data.id}name`}>{userMovieList[i].data.title}</td>
                    <td key={`${userMovieList[i].data.id}date`}>{userMovieList[i].data.release_date.slice(0, 4)}</td>
                    <td key={`${userMovieList[i].data.id}genres`}>{genreResponseEach}</td>
                    <td key={`${userMovieList[i].data.id}desc`}>{userMovieList[i].data.overview}</td>
                    <td key={`${userMovieList[i].data.id}streamers`}>{streamResponseEach}</td>
                </tr>
            )
        }

        return (
            console.log(userMovieList),
            <div>
                
                <div className={css.left}>
                    <h2 className={css.h2}>{window.user}'s Watch List:</h2>
                </div>
                <div className={css.right}>
                <Button variant="primary" className={css.btn} onClick={searchResultsClick}>Search Results</Button>{' '}
                    <Button variant="primary" className={css.btn} onClick={userProfileClick}>My Profile</Button>{' '}
                    <LogOut />
                </div>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Release Year</th>
                            <th>Genre(s)</th>
                            <th>Description</th>
                            <th>Where to Watch</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderItems}
                    </tbody>
                </Table>
            </div>
        )
    }
}