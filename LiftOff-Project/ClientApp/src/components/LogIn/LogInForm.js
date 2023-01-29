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

    /*onSubmit = () => {
        console.log("here");
        console.log(this.refs.userid.value);
        alert('Priyanka');
        const res = axios.get("https://localhost:44413/login", { 'userid' : this.refs.userid.value});
        console.log(res);
    }*/
    onSubmit = () => {


        fetch(`login/${this.refs.userid.value}`, {
            method: 'GET',
            headers: { 'Content-type': 'application/json' },


        }).then(r => r.json()).then(res => {
            console.log(res); //This returns array with a length > 0 or = 0
            if (res) {

                this.state.user = res;
                if (this.state.user.length > 0) {
                    if (this.state.user[0]['password'] === this.refs.password.value) {
                        console.log(this.state.user[0]['password']);
                        this.state.DataLoaded = true;
                        alert('Login Successful');

                    }

                }
                else {
                    alert('Login Failed!!.. User Id or Password does not match.')
                }

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
export default LogInForm;