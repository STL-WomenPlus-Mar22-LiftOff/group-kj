import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Global.css';
import css from './BottomNavBarMenu.module.css'

export class BottomNavBar extends Component {
    static displayName = BottomNavBar.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
                <div>
                    <Navbar className={css.navbar} container light>
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" className="lowerleft"/>
                            <p className={css.clearleft}>Credit: This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
                        </Collapse>
                    </Navbar>
                </div>
        );
    }
}
