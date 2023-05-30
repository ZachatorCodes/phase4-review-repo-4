import React, { useState, useEffect } from 'react';

const Reviews = ({ review, setEncabulators, encabulators, currentEncab }) => {
    const deleteReview = (review) => {        
        const newEncabReviews = currentEncab.reviews.filter(rev => rev.id !== review.id)
        currentEncab.reviews = newEncabReviews
        setEncabulators(encabulators.map(item => item.id === currentEncab.id ? currentEncab : item))
    }

    const handleDelete = (e) => {
        e.preventDefault()
        fetch (`/reviews/${review.id}`, {
            method: 'DELETE',
        })
        .then((r) => r.json())
        .then((data) => deleteReview(data))
    }

        const addReview = (review) => {
        const findEncab = encabulators.find((item) => item.id === currentEncab.id)
        const newEncabReviews = [...findEncab.reviews, review]
        findEncab.reviews = newEncabReviews
        setEncabulators(encabulators.map(item => item.id === currentEncab.id ? currentEncab : item))
    }

    return (
        <div>
            <p>User: {review.user.username}</p>
            <p>{review.body}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Reviews