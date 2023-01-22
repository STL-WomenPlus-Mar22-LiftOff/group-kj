import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from 'react-bootstrap/Button';
import css from './LogInForm.module.css';

const schema = yup.object().shape({
    email: yup.string().email("Please enter your email address").required("Please enter your email address"),
    password: yup.string().required("Please enter your password"),
});

export function LogInForm() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur",
    });

    const submitLogInForm = (data) => {
        console.log(data);
        alert(JSON.stringify(data));
    };

    return (
        <div>
            <form className={css.error} onSubmit={handleSubmit(submitLogInForm)}>
                <div>
                    <input className={css.input} type="email" name="email" placeholder="Email" {...register("email")} />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                    <input className={css.input} type="password" name="password" placeholder="Password" {...register("password")} />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <div className="text-center">
                    <Button variant="primary" type="submit" className={css.click}>Log In!</Button>{' '}
                </div>
            </form>
        </div>
    );
}
