//This is function component fine that works fine when clicked the second time. I have no idea how to change this work
// one time.

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from 'react-bootstrap/Button';
import css from './LogInForm.module.css';

import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
    email: yup.string().email("Please enter your email address").required("Please enter your email address"),
    password: yup.string().required("Please enter your password"),
});

export function LogInForm() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur",
    });

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState([]);

    const submitLogInForm = () => {
         
        fetch(`login/${email}`, {
            method: 'GET',
            headers: { 'Content-type': 'application/json' },


        }).then(r => r.json()).then(res => {
            console.log(res); //This returns array with a length > 0 or = 0
            if (res) {
                setUser(res);
                console.log("The user array length is", user.length);
                if (user.length > 0) {
                    if (user[0]['password'] === password) {
                        console.log(user[0]['password']);
                        alert('Login Successful');
                        navigate('/user-profile');

                    }

                }
                else {
                    alert('Login Failed!!.. User Id or Password does not match.')
                }

            }
        })

        

    };

    return (
        <div>
            <form className={css.error} onSubmit={handleSubmit(submitLogInForm) }>
                <div>
                    <input className={css.input} type="email" name="email" placeholder="Email" {...register("email", { onChange: (e) => { setEmail(e.target.value) } })} />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                    <input className={css.input} type="password" name="password" placeholder="Password" {...register("password", { onChange: (e) => { setPassword(e.target.value) } })} />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <div className="text-center">
                    <Button variant="primary" type="submit" className={css.click} >Log In!</Button>{' '}
                </div>
            </form>
        </div>
    );
}


//This is the class component code working fine. It works the very first time itself.
/*import React from 'react';

class LogInForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            message: '',
            userid: 1,
            user: [],
            DataLoaded: false,
            redirect : null
        }
    };

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
export default LogInForm;*/





