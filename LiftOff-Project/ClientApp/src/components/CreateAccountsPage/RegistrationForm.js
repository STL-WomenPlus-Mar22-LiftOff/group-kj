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

    const submitRegistrationForm = async (data) => {
        navigate('/user-profile');
        console.log(data);
        //alert(JSON.stringify(data));

        const url = 'https://localhost:44413/user';
        //https://localhost:44413/create-account URL doesn't work

        let userInfo = {
            UserName: firstName + ' ' + lastName,
            Password: password,
            Email: email,
        };

        await axios.post(url, userInfo);
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
