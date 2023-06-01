import React, { useState } from 'react';

const ReviewForm = ({ user, currentEncab, setNewReview, setEncabulators, encabulators }) => {
    const [review, setReview] = useState()
    const [errors, setErrors] = useState([])

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
        .then ((r) => {
            if (r.ok) {
                r.json().then ((data) => addReview(data))
                setReview('')
                setNewReview(false)
            }
            else {
                r.json().then((eData) => setErrors(eData.errors))
            }
        })
    }

    const handleReviewChange = (e) => setReview(e.target.value)

    const onCancelClick = () => setNewReview(false)

    return (
        <div id='reviewForm'>
            <form onSubmit={handleReviewPostClick} id='reviewFormForm'>
                <label id='reviewLabel'>Enter your new Review Here</label>
                <input id='reviewInput' type='TEXT' value={review} onChange={handleReviewChange}/>
                {errors.length === 0 ? null : errors.map(error => <p className='error'>{error}</p>)}  
                <button id='reviewSubButton'>Submit</button>        
            </form>
            <button id='reviewInputCancel' onClick={onCancelClick}>Cancel</button>
            </div>
    )

}

export default ReviewForm