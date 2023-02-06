import React, { useEffect } from 'react';
import { SearchBar } from "./SearchForm";
import css from './UserProfile.module.css';
import { LogOut } from '../LogOut/LogOut';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export function UserProfile() {

    const navigate = useNavigate();

    const onClick = () => {
        navigate("/watch-list");
    };

    useEffect(() => {
        document.body.style.background = "rgb(1, 1, 70)";
    }, [])

    return (
        <div className={css.format}>
            <h1>Hello, {window.user}!</h1>
            <h2 className={css.h2}>Let's find your next favorite movie.</h2>

            <SearchBar />

            <div className={css.rowbuttons}>
                <div className={css.columnbuttons}>
                    <Button variant="primary" className={css.btn} onClick={onClick}>My Watch List</Button>{' '}
                </div>
                <div className={css.columnbuttons}>
                    <LogOut />
                </div>
            </div>
        </div>
    );
}