import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { Redirect } from "react-router-dom";

class NewLogIn extends React.Component {


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
         /*fetch(`login/?UserName=${this.refs.userid.value}&password=${this.refs.password.value}`, {
            method: 'GET',
            headers: { 'Content-type': 'application/json' },
            

        }).then(r => r.json()).then(res => {
            console.log(res); //This returns array with a length > 0 or = 0
            if (res) {
                alert("Record found");
            }
        })*/
        fetch(`login/${this.refs.userid.value}`, {
            method: 'GET',
            headers: { 'Content-type': 'application/json' },


        }).then(r => r.json()).then(res => {
            console.log(res); //This returns array with a length > 0 or = 0
            if (res) {
                
                this.state.user = res;
                if (this.state.user.length > 0) {
                    console.log(this.state[0]);
                    alert('Login Successful!')
                    this.state.DataLoaded = true;

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
export default NewLogIn;