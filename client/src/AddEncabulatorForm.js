import React, { useState } from 'react';

const AddEncabulatorForm = ({ setNewEncab, encabulators, setEncabulators }) => {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState()
    const [errors, setErrors] = useState([])
    
    const onCancelClick = () => setNewEncab(false)
    
    const onNameChange = (e) => setName(e.target.value)
    const onImageChange = (e) => setImage(e.target.value)
    const onDescriptionChange = (e) => setDescription(e.target.value)
    const onPriceChange = (e) => setPrice(e.target.value)

    const handleNewEncabulatorClick = (e) => {
        e.preventDefault()
        const   data = {
            name: name,
            description: description,
            image_url: image,
            price: price,
        }
        fetch ('/encabulators', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),            
        })
        .then ((r) => {
            if (r.ok) {
                r.json().then ((data) => addEncab(data))
                setNewEncab(false)
                setName('')
                setDescription('')
                setImage('')
                setPrice()
            }
            else {
                r.json().then((eData) => setErrors(eData.errors))
            }
        })
    }

    const addEncab = (encab) => {
        setEncabulators(encabulators.concat(encab))
    }

    return (
        <form id='EncabForm' onSubmit={handleNewEncabulatorClick}>
            <label>Encabulator</label>
            <input type='TEXT' value={name} onChange={onNameChange} />
            <label>Image Url</label>
            <input type='TEXT' value={image} onChange={onImageChange} />
            <label>Description</label>
            <input type='TEXT' value={description} onChange={onDescriptionChange} />
            <label>Price</label>
            <input type='NUMBER' value={price} onChange={onPriceChange} />
            {errors.length === 0 ? null : errors.map(error => <p className='error'>{error}</p>)}
            <button>Submit</button>
            <button onClick={onCancelClick}>Cancel</button>
        </form>
    )
}

export default AddEncabulatorForm