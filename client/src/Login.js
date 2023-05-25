import React, { useState } from 'react';
import LoginForm from './LoginForm';

const Login = ({ setUser }) => {
    const [login, setLogin] = useState(true)

    return (
        <div>
            {login ? (
                <div>
                    <LoginForm setUser={setUser} />
                    <button onClick= {()=>setLogin(false)}>Don't have an account?</button>
                </div>
            ) : (
                <div>
                    {/* <SignupForm setUser={setUser} /> */}
                    <button onClick={() => setLogin(true)} />
                </div>
            )}
        </div>
    )
}

export default Login