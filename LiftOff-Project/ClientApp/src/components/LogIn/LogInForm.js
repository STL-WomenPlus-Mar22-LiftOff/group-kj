import React from 'react';
import axios from 'axios';

class LogInForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            message: '',
            userid: 1,
            user: [],
            DataLoaded: false
        }
    };

    onSubmit = () => {
        console.log("here");
        console.log(this.refs.userid.value);
        alert('Priyanka');
        const res = axios.get("https://localhost:44413/login");
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
export default LogInForm;