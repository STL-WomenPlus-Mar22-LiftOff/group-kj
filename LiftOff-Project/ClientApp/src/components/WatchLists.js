import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import { Component } from 'react';
import axios from "axios";

class WatchLists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    };
    handleSave = () => {
        const url = 'https://localhost:44413/watchlist';
      
        let userInfo = {

            name: this.refs.name.value,
            userId: this.refs.userid.value
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
                    <label>Name : <input type="text" ref="name" /></label>
                </p>
                <p>
                    <label>UserId : <input type="text" ref="userid" /></label>
                </p>
                <button onClick={this.handleSave}>Sign up!</button>
              
            </div>
        )
    }
}
export default WatchLists;