import React, { useState, useEffect ,Component} from 'react';
import { Table } from 'reactstrap';

export class MyWatchList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
    componentDidMount() {
        fetch(
            "https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div>;
        else {
            
            
            return (


                <div className="App">
                    <h1> Fetch data from an api in react </h1>  {
                        items.map((item) => (
                            <div>
                                <select id="cars" name="cars">
                                    <option value={item.username} >{item.username}</option>
                                </select>
                            </div>
                        ))
                    }
                </div>

            );
        }
        }
}

export default MyWatchList;