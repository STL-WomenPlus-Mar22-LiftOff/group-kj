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
        var userExists = 0;

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
                console.log(res.length);
                if (res.length > 0)
                {
                    console.log("The record already exists for the given email id", email);
                    alert("User exists");
                }
                else if (res.length == 0)
                    {
                        console.log("The record for the given email id doesnt exist");
                        axios.post(url, userInfo);
                        

                        //Fetching the newly added record.
                        fetch(`login/${email}`, {
                            method: 'GET',
                            headers: { 'Content-type': 'application/json' },

                        }).then(c => c.json()).then(result => {
                            if (result) {
                                console.log(result);
                                if (result.length > 0) {
                                    console.log("Newly added ")
                                    window.user = result[0]['userName'];  // If yes, store the username in a window variable to pass to user profile page.
                                    window.userid = result[0]['id'];  //If yes, store the id in a window variable to pass to user profile page.
                                navigate('/user-profile');
                            }

                        }
                    })

                }
                    
            }
        }
            
        )
        
        
    };

    return (
        <div>

            <h1 className={css.h1}>Welcome</h1>
            <h3 className={css.h3}>Create Your Account!</h3>

            <form className={css.error} >
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
                    <Button variant="primary" type="submit" className={css.click} onClick={handleSubmit(submitRegistrationForm)}>Sign Up!</Button>{' '}
                </div>
            </form>
        </div>
    );
}