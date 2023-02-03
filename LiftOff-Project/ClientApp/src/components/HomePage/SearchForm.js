import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './SearchForm.module.css';
import { Table } from 'reactstrap';

if (!window.searchTerm) {
    window.searchTerm = '';
}
export function SearchBar() {
    const [searchTerm, setSearchTerm] = useState(window.searchTerm);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        window.searchTerm = e.target.value;
    };

    const handleSubmit = (input) => {
        navigate('/search-table', );
    };

    const getStreamServices = async (results) => {
        let streamServices = {};
        for (const result of results) {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${result.id}/watch/providers?api_key=${apiKey}`);
            const data = await response.json();
            streamServices[result.id] = data.providers;
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
