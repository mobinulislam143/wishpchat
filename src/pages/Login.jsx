import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import {  auth } from "../firebase";


import { useNavigate } from 'react-router-dom';

function Login(props) {
    const [err, setErr] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/home')
        } catch (err) {
            setErr(true)
        } 
    }
 
    return (
        <div>
            <div className='container'>
                <div className='formContainer'>
                    <div className='formWrapper'>
                        <h2 className='logo'>WhispChat</h2>
                        <h3 className='title'>Login</h3>
                        <form onSubmit={handleSubmit}>
                            <input type='email' placeholder='email' />
                            <input
                                id="myInput"
                                placeholder='password'
                                type='password'
                            />
                            
                            <button type='submit'>Log in</button>
                            {err && <span>Something went wrong!!!</span>}

                        </form>
                        <p>If you are not registered? Please<a href='/register'>Sign up</a> </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Login;