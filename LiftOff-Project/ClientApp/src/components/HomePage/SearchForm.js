import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
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
        navigate('/search-results', { state: { searchResults: data.results } });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search movie titles"
            />
            <button type="submit">Submit</button>
            {searchResults && searchResults.results && searchResults.results.length > 0 ? (
                <ul>
                    {searchResults.results.map((result) => (
                        <li key={result.id}>{result.title}</li>
                    ))}
                </ul>
            ) : (
                    <p>No results found</p>
                )}
        </form>
    );
};