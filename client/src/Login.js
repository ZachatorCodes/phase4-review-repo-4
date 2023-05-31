import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Login = ({ setUser }) => {
    const [login, setLogin] = useState(true)

    return (
        <div id='login'>
            {login ? (
                <div id='loginForm'>
                    <LoginForm setUser={setUser} />
                    <button id='loginButton' onClick= {()=>setLogin(false)}>Don't have an account?</button>
                </div>
            ) : (
                <div>
                    <SignupForm setUser={setUser} setLogin={setLogin}/>
                    <button id='signupButton' onClick={() => setLogin(true)}>Already have an account?</button>
                </div>
            )}
        </div>
    )
}

export default Login