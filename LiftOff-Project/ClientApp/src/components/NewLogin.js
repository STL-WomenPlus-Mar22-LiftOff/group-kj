import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import { Component } from 'react';
import axios from "axios";
import { Route, Routes, useNavigate } from 'react-router-dom';

class NewLogIn extends React.Component {
    

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            userid: 1
            
        }
     };
    
    onSubmit = () => {
        alert('sign up clicked'); //this is working fine.

        let userInfo = {
            Id: this.refs.userid.value,
            password: this.refs.password.value,
            
        };

        console.log(userInfo);

        fetch(`login/${this.refs.userid.value}`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(userInfo)

        }).then(r => r.json()).then(res => {
            console.log(res); //This returns array with a length > 0 or = 0
            if (res) {
                alert('Record found')
            }
        })

    }

    render() {
        return (
            <div>

                <p>
                    <label>User ID : <input type="text" ref="userid" /></label>
                </p>
                <p>
                    <label>Password : <input type="text" ref="password" /></label>
                </p >               
                <button onClick={this.onSubmit}>Login</button>

            </div>
        )
    }
}
export default NewLogIn;