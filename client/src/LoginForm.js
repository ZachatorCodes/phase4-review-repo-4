import React, { useState } from 'react';

const LoginForm = ({ setUser }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
        .then((r) => {
            if (r.ok) {
            r.json().then(user => setUser(user))
            }
            else {
                r.json().then(errors => setErrors(errors.error))
            }
        })
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const dispErrors = () => {
        errors.map(err => <p>{err}</p>)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type='Text' value={username} onChange={handleUsernameChange} />
            <label>Password</label>
            <input type='Password' value={password} onChange={handlePasswordChange} />
            <button>Login</button>
        </form>
    )
}

export default LoginForm