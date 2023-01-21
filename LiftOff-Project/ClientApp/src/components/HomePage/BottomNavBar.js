import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Global.css';
import css from './BottomNavBarMenu.module.css'

export class BottomNavBar extends Component {
    static displayName = BottomNavBar.name;

    render() {
        return (

            <div id={css.bottombar}>
                <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
                    alt="tmdb logo" />
                <br />
                <p>Credit: This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
            </div>
        );
    }
}
