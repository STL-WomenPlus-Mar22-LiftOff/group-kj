import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from 'react-bootstrap/Button';
import css from 'C:/Users/priya/source/repos/group-kj/LiftOff-Project/ClientApp/src/components/LogIn/LogInModal.module.css';

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

    const submitLogInForm = () => {

        fetch(`login/${email}`, {
            method: 'GET',
            headers: { 'Content-type': 'application/json' },


        }).then(r => r.json()).then(res => {
            
            if (res) {
                setUser(res);
                console.log("The user array length is", user.length);
                if (user.length > 0) {
                    //This checks if the password also matches the User email that is entered
                    if (user[0]['password'] === password) {
                        
                        window.user = user[0]['userName'];// If yes store the username in a window variable.
                        window.userid = user[0]['id'];//If yes store the id in a window variable to be passed on the user profile page.
                        console.log(window.user);
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
                    <Button variant="primary" type="submit" className={css.click} onClick>Log In!</Button>{' '}
                </div>
            </form>
        </div>
    );
}
