
import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import { Component } from 'react';
import axios from "axios";

class LogInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    };


    handleSave = () => {
        const url = 'https://localhost:44413/LogIn';

        let userInfo = {

            Email: this.refs.email.value
        };
        console.log("here");

        axios.get(url, userInfo)
            .then((result) => {
                if (result) {
                    console.log(result)
                    //this.setState({ message: 'User created!' })
                }
            })

    }

    render() {
        return (
            <div>
                <form >
                    <div>
                        <input  type="email" name="email" placeholder="Email" />

                    </div>
                    <div>
                        <input  type="password" name="password" placeholder="Password" />

                    </div>
                    <div className="text-center">
                        <Button variant="primary" type="submit" onClick={this.handleSave } >Log In!</Button>{' '}
                    </div>
                </form>
            </div>
        );
    }
}
export default LogInForm;