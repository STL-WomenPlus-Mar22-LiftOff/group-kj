import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from 'react-bootstrap/Button';
import css from './CreateAccount.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
    email: yup.string().email("Please enter a valid email address").required("Please enter a valid email address"),
    password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters").max(15, "Password can only be 15 characters max"),
    confirmPassword: yup.string().required("Confirm password is required").oneOf([yup.ref("password"), null], "Passwords must match"),
    firstName: yup.string().required("Please enter your first name"),
    lastName: yup.string().required("Please enter your last name"),
});

var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

export function RegistrationForm() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur",
    });

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const submitRegistrationForm = async () => {

        const url = `user/`;  //API controller URL
        var hash = bcrypt.hashSync(password, salt);

        let userInfo = {
            UserName: firstName + ' ' + lastName,
            Password: hash,
            Email: email,
        };

        fetch(`login/${email}`, {
            method: 'GET',
            headers: { 'Content-type': 'application/json' },

        }).then(r => r.json()).then(res => {
            if (res) {
                if (res.length > 0) {
                    alert("A NextWatch account already exists with this email address.");
                } else if (res.length === 0) {
                    axios.post(url, userInfo);  //this is adding the newly created user to the database

                    //Fetching the newly created user's information
                    fetch(`login/${email}`, {
                        method: 'GET',
                        headers: { 'Content-type': 'application/json' },

                    }).then(c => c.json()).then(result => {
                        if (result) {
                            if (result.length > 0) {
                                window.user = result[0]['userName'];  // If yes, store the username in a window variable to pass to other pages.
                                window.userid = result[0]['id'];  //If yes, store the id in a window variable to pass to other pages.
                                navigate('/user-profile');
                            }
                        }
                    })
                }
            }
        })
    };

    return (
        <div>

            <h1 className={css.h1}>Welcome</h1>
            <h3 className={css.h3}>Create Your Account!</h3>

            <form className={css.error} onSubmit={handleSubmit(submitRegistrationForm)}>
                <div>
                    <input className={css.input} type="email" name="email" placeholder="Email" {...register("email", { onChange: (e) => { setEmail(e.target.value) } })} />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                    <input className={css.input} type="password" name="password" placeholder="Password" {...register("password", { onChange: (e) => { setPassword(e.target.value) } })} />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <div>
                    <input className={css.input} type="password" name="confirmPassword" placeholder="Confirm Password" {...register("confirmPassword")} />
                    {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                </div>
                <div>
                    <input className={css.input} type="text" name="firstName" placeholder="First Name" {...register("firstName", { onChange: (e) => { setFirstName(e.target.value) } })} />
                    {errors.firstName && <p>{errors.firstName.message}</p>}
                </div>
                <div>
                    <input className={css.input} type="text" name="lastName" placeholder="Last Name" {...register("lastName", { onChange: (e) => { setLastName(e.target.value) } })} />
                    {errors.lastName && <p>{errors.lastName.message}</p>}
                </div>
                <div>
                    <Button variant="primary" type="submit" className={css.click}>Sign Up!</Button>{' '}
                </div>
            </form>
        </div>
    );
}