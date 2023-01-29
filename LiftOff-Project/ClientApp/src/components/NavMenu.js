import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Global.css';
import { LogInModal } from './LogIn/LogInModal';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
      isModalOpen: false,
    };

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.handleModalOpen = this.handleModalOpen.bind(this);

  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  handleModalOpen() {
    this.setState((prevState) => {
      return { isModalOpen: !prevState.isModalOpen }
    })
  }

  render() {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
          <NavbarBrand tag={Link} to="/">NextWatch</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
              </NavItem>
              {/*<NavItem>
                <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
              </NavItem>*/}
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/create-account">Create Account</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-dark" onClick={this.handleModalOpen} style={{cursor: 'pointer'}}>Log In</NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/search-results">Search Results</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/user-profile">User Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/my-watch-list">My Watch List</NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Navbar>
        <LogInModal
          isModalOpen={this.state.isModalOpen}
          handleModalOpen={this.handleModalOpen}
        />
      </header>
    );
  }
}
