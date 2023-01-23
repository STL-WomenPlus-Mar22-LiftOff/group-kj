


import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import { Component } from 'react';
import axios from "axios";
class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    };
    handleSave = () => {
        const url = 'https://localhost:44413/user';
      
        let userInfo = {

            UserName: this.refs.firstname.value + ' ' + this.refs.lastname.value,
            Password: this.refs.password.value,
            Email: this.refs.email.value
        };
        axios.post(url, userInfo)
            .then((result) => {
                if (result) {
                    this.setState({ message: 'User created!' })
                }
            })
        alert('User created successfully!')
    }
   
    render() {
        return (
            <div>
                
                <p>
                    <label>First Name : <input type="text" ref="firstname" /></label>
                </p>
                <p>
                    <label>Last Name : <input type="text" ref="lastname" /></label>
                </p>
                <p>
                    <label>Email : <input type="text" ref="email" /></label>
                </p>
                <p>
                    <label>Password : <input type="text" ref="password" /></label>
                </p>
                <p>
                    <label>Confirm Password : <input type="text" ref="confirmpassword" /></label>
                </p>
                <button onClick={this.handleSave}>Sign up!</button>
              
            </div>
        )
    }
}
export default Users;