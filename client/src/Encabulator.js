import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';

const Encabulator = ({ encabulators, user, setEncabulators }) => {
    const { id } = useParams()
    const [newReview, setNewReview] = useState(false)

    const onAddButtonClick = () => {
        setNewReview(true)
    }

    const currentEncab = encabulators.find((item) => item.id == id)

    const currentReviews = currentEncab ? 
            currentEncab.reviews.map((review) => {
            return <Reviews review={review} setEncabulators={setEncabulators} encabulators={encabulators} currentEncab={currentEncab} user={user}/>       
        }) : null

    if (!currentEncab) return <h2>Loading</h2>
    
    return(
        <div id='encab'>
            <h1>{currentEncab.name}</h1>
            <img src={currentEncab.image_url} id='encabimg'/>
            <p>{currentEncab.description}</p>
            <p>${currentEncab.price}</p>
            {newReview === false ? <button onClick={onAddButtonClick}>Click to add a new review</button>: <ReviewForm user={user} currentEncab={currentEncab} setNewReview={setNewReview} encabulators={encabulators} setEncabulators={setEncabulators} />}
            {currentReviews}
        </div>
    )

}

export default Encabulator