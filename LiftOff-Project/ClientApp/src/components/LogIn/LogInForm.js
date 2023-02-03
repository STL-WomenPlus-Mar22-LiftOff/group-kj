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

    const navigate = useNavigate(); //For navigating to the user profile page.

    const [email, setEmail] = useState(""); //Setting the email entered in the textbox
    const [password, setPassword] = useState(""); //Setting the password entered in password textbox.

    const submitLogInForm = () => {
        let emailArray = [];

        fetch('https://localhost:44413/user', {
            method: 'GET',
            headers: { 'Content-type': 'application/json' },

        }).then(response => response.json()).then(response => {
            //console.log(response); //This returns array with a length > 0 or = 0
            if (response.length > 0) {

                //check if email is included in database (alert user if not found)
                for (let i = 0; i < response.length; i++) {
                    emailArray.push(response[i].email);
                }
                //console.log(emailArray);
                if (!emailArray.includes(email)) {
                    alert("We couldn't log you in. Please check your email and password and try again.");
                }

                //if email is included in database, check password is a match (alert user if password doesn't match)
                for (let i = 0; i < response.length; i++) {
                    if (email === response[i].email) {
                        //console.log("Email is in database");
                        if (password === response[i].password) {
                            //console.log("Password matches");
                            //alert('Login Successful');
                            navigate("/user-profile");
                        } else {
                            alert("We couldn't log you in. Please check your email and password and try again.");
                        }
                    }
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