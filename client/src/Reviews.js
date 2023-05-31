import React, { useState, useEffect } from 'react';

const Reviews = ({ review, setEncabulators, encabulators, currentEncab, user }) => {
    const [edit, setEdit] = useState(false)
    const [editInput, setEditInput] = useState(`${review.body}`)

    const deleteReview = (review) => {        
        const newEncabReviews = currentEncab.reviews.filter(rev => rev.id !== review.id)
        currentEncab.reviews = newEncabReviews
        setEncabulators(encabulators.map(item => item.id === currentEncab.id ? currentEncab : item))
    }
    
    const editReview = (review) => {
        let newEncabReviews = currentEncab.reviews.map(rev => rev.id === review.id ? review : rev)
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

    const handleEdit = (e) => {
        e.preventDefault()
        fetch (`/reviews/${review.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({
                body: editInput,
            }),
        })
        .then((r) => r.json())
        .then((data) => editReview(data))
        setEditInput(`${review.body}`)
        setEdit(false)
    }

    const onEditClick = () => {
        edit === false ? setEdit(true) : setEdit(false)
    }

    const onCancelClick = () => {
        setEdit(false)
    }

    const onEditChange = (e) => {
        setEditInput(e.target.value)
    }

    const showEdit = () => {
        if (edit) {
            return (
                <form onSubmit={handleEdit}>
                    <input type='TEXT' value={editInput} onChange={onEditChange} />
                    <button>Submit</button>
                </form>
            )
        }
        else {
            return <p id='ReviewP'>{review.body}</p>
        }
    }
    

    

    return (
        <div id='reviewDiv'>
            <p id='user'>User: {review.user.username}</p>
            {showEdit()}
            {user.id === review.user.id ? <button onClick={handleDelete}>Delete</button> : null}
            {user.id === review.user.id ? <button onClick={onEditClick}>Edit</button> : null}
        </div>
    )
}

export default Reviews