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

export function NewLogIn() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur",
    });

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState([]);

    const submitLogInForm = async (data) => {

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





