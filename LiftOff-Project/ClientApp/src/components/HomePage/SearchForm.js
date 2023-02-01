import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './SearchForm.module.css';
import { Table } from 'reactstrap';

export function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [streamServices, setStreamServices] = useState([]);
    const navigate = useNavigate();
    const apiKey = "c8318348d74b5b70bd5646fd05ac62b9"

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`);
        const data = await response.json();
        setSearchResults(data.results);
        const streamingServices = await getStreamServices(data.results);
        navigate('/search-results', { state: { searchResults: data.results, streamServices: streamingServices } });
    };

    const getStreamServices = async (results) => {
        let streamServices = {};
        for (const result of results) {
            console.log(result);
            const response = await fetch(`https://api.themoviedb.org/3/movie/${result.id}/watch/providers?api_key=${apiKey}`);
            console.log(response)
            const data = await response.json();
            streamServices[result.id] = data.results;

        }
        return streamServices;
    }

    return (
        <form onSubmit={handleSubmit} className={css.searchbox}>
            <input
                className={css.inputbox}
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search by movie title..."
            />
            <button type="submit">Submit</button>
        </form>
    );
};