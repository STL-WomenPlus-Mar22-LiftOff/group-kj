import React from 'react';
import Button from 'react-bootstrap/Button';
import css from './LogOut.module.css';
import { useNavigate } from 'react-router-dom';

export function LogOut() {

    const navigate = useNavigate(); //Navigate back to the home page

    const clickLogOut = () => {
        window.user = null;
        window.userid = null;
        navigate("/");
    };

    return (
        <div>
            <Button variant="primary" className={css.click} onClick={clickLogOut}>Log Out</Button>{' '}
        </div>
    );
}