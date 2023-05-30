import React, { useState } from 'react';

const ReviewForm = ({ user, currentEncab, setNewReview, setEncabulators, encabulators }) => {
    const [review, setReview] = useState()

    const addReview = (review) => {
        const findEncab = encabulators.find((item) => item.id === currentEncab.id)
        const newEncabReviews = [...findEncab.reviews, review]
        findEncab.reviews = newEncabReviews
        setEncabulators(encabulators.map(item => item.id === currentEncab.id ? currentEncab : item))
    }

    const handleReviewPostClick = (e) => {
        e.preventDefault()
        const data = {
            user_id: user.id,
            encabulator_id: currentEncab.id,
            body: review,                        
        }
        fetch('/reviews', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((r) => r.json())
        .then((data) => {
            addReview(data)
            setReview('')
            setNewReview(false)
        })
    }

    const handleReviewChange = (e) => setReview(e.target.value)

    const onCancelClick = () => setNewReview(false)

    return (
        <div>
            <form onSubmit={handleReviewPostClick}>
                <label>Enter your new Review Here</label>
                <input type='TEXT' value={review} onChange={handleReviewChange}/>
                <button>Submit</button>            
            </form>
            <button onClick={onCancelClick}>cancel</button>
            </div>
    )

}

export default ReviewForm