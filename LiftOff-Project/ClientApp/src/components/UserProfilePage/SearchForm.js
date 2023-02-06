import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './SearchForm.module.css';

if (!window.searchTerm) {
    window.searchTerm = '';
}
export function SearchBar() {
    const [searchTerm, setSearchTerm] = useState(window.searchTerm);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        window.searchTerm = e.target.value;
    };

    const handleSubmit = (input) => {
        navigate('/search-table',);
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