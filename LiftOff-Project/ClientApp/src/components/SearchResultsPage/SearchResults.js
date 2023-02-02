import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Table } from 'reactstrap';
import React from 'react';

export function SearchResults() {
    const location = useLocation();
    const searchResults = location.state.searchResults;
    const streamServices = location.state.streamServices;
    const genreList = "genre/movie/list";

    //const streamingServices = {};

    //for (const key in streamServices) {
    //    streamingServices[key] = streamServices[key].US;
    //}

    //let movieId = 808;

    //const test = Object.keys(streamingServices[movieId]).map((service, index) => {
    //    return streamingServices[movieId][service];
    //})

    //console.log(streamServices[movieId].flatrate[0].provider_name);
    //console.log(test)

    //console.log(streamServices);
    //console.log(streamingServices);

    console.log(searchResults[0]);
    console.log(streamServices);

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Genre</th>
                        <th>Where to stream</th>
                    </tr>
                </thead>
                <tbody>
                    {searchResults.map((result) => (
                        <tr key={result.id}>
                            <td>{result.title}</td>
                            <td>{result.overview}</td>
                            <td>{result.genre}</td>
                            <td>
                                <ul>
                                    {streamServices && typeof streamServices === "object" ?
                                        Object.keys(streamServices).map((service, index) => (
                                            <li key={index}>{service.US}</li>
                                        ))
                                        : <li>No results...</li>
                                    }
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Link to="/user-profile"><Button variant="primary">Search again!</Button>{' '}</Link>
        </div>
    );
};