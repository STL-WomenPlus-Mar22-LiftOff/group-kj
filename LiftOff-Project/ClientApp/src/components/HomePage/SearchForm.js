import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './SearchForm.module.css';
import { Table } from 'reactstrap';

if (!window.searchTerm) {
    window.searchTerm = '';
}
export function SearchBar() {
    const [searchTerm, setSearchTerm] = useState(window.searchTerm);
    const [searchResults, setSearchResults] = useState([]);
    const [streamServices, setStreamServices] = useState([]);
    const navigate = useNavigate();
    const apiKey = "c8318348d74b5b70bd5646fd05ac62b9"

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        window.searchTerm = e.target.value;
    };

    const handleSubmit = (input) => {
        navigate('/search-table', );
    };

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
