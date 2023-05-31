import React, { useState } from 'react';

const SignupForm = ({ setUser, setLogin }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmation, setConfirmation] = useState('')
    const [name, setName] = useState('')
    const [bio, setBio] = useState('')
    const [errors, setErrors] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            username,
            password,
            password_confirmation: confirmation,
            bio,
            name
        }
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),            
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user))
            }
            else {
                r.json().then((errors) => setErrors(errors))
            }
        })
        .then(setLogin(true))
    }

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleConfirmation = (e) => {
        setConfirmation(e.target.value)
    }

    const handleName = (e) => {
        setName(e.target.value)
    }
    
    const handleBio = (e) => {
        setBio(e.target.value)
    }

    const dispErrors = () => {
        errors.map(err => <p>{err}</p>)
    }

    return (
        <form id='signupForm' onSubmit={handleSubmit}>
            <label>Username</label>
            <input type='Text' onChange={handleUsername} value={username} />
            <label>Password</label>
            <input type='Text' onChange={handlePassword} value={password} />
            <label>Confirm Password</label>
            <input type='Text' onChange={handleConfirmation} value={confirmation} />
            <label>Enter your display name</label>
            <input type='Text' onChange={handleName} value={name} />
            <button>Submit</button>
        </form>
    )
}

export default SignupForm