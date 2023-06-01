import React, { useState } from 'react';

const Home = ({ user }) => {
    return (
        <div id='welcomePage'>
            <h1 id='Welcome'>Welcome {user.name}</h1>
            <p className='WelcomeP' >You have found the magical world of Encabulation!</p>
            <h4 className='WelcomeP'>But, what is an Encabulator you may ask?</h4>
            <p>An instrument that allows transmission that not only supplies inverse reactive current for use in unilateral phase detractors, but is also capable of automatically synchronizing cardinal grammeters.</p>
            <div id='WelcomeContainter'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/RXJKdh1KZ0w"></iframe>
                <a id='WelcomeA' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' >Want more information? Click here!</a>
            </div>
        </div>
    )
}

export default Home