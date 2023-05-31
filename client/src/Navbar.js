import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';


const NavBar = ({ setUser }) => {
    const history = useHistory()
    const handleLogout = () => {
        fetch('/logout', {
            method: "DELETE"
        })
        .then((r) => {
            if (r.ok) {
                setUser(null)
                history.push('/')
            }
        })
    }

    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/encabulator-list'>Encabulators</NavLink>
            <button onClick={handleLogout} id='navButton'>Logout</button>
        </nav>
    )
}

export default NavBar