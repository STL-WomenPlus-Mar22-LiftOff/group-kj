import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from 'react-bootstrap/Button';
import css from './LogInForm.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { param } from 'jquery';

const schema = yup.object().shape({
    email: yup.string().email("Please enter your email address").required("Please enter your email address"),
    password: yup.string().required("Please enter your password"),
});

export function LogInForm() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur",
    });
    const navigate = useNavigate(); //For navigating to the user profile page.

    const [user, setUser] = useState([]); //Setting the user array fetched from the controller
    const [email, setEmail] = useState(""); //Setting the email entered in the textbox
    const [password, setPassword] = useState(""); //Setting the password entered in password textbox.
    

    const submitLogInForm = (data) => {
        console.log(email);
        console.log(data);
     
        fetch(`login/${email}`, {
            method: 'GET',
            headers: { 'Content-type': 'application/json' },


        }).then(r => r.json()).then(res => {
            console.log(res); //This returns array with a length > 0 or = 0
            if (res) {
                setUser(res);
                if (user.length > 0) {
                    if (user[0]['password'] === password) {
                        console.log(user[0]['password']);
                        alert('Login Successful');
                        navigate("/user-profile");
                    }

                }
                else {
                    console.log(user);
                    alert('Login Failed!!.. User Id or Password does not match.')
                }
            }
        });
     };

    return (
        <div>
            <form className={css.error} onSubmit={handleSubmit(submitLogInForm)}>
                <div>
                    <input className={css.input} type="email" name="email" placeholder="Email" {...register("email", { onChange: (e) => { setEmail(e.target.value) } })} />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                    <input className={css.input} type="password" name="password" placeholder="Password" {...register("password", { onChange: (e) => { setPassword(e.target.value) } })} />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <div className="text-center">
                    <Button variant="primary" type="submit" className={css.click}>Log In!</Button>{' '}
                </div>
            </form>
        </div>
    );
}
