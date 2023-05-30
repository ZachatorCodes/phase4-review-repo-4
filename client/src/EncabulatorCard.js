import React from 'react';
import { Link } from 'react-router-dom';

const EncabulatorCard = ({ encabulator }) => {
    return (
        <div>
            <img src={encabulator.image_url} />
            <h3>{encabulator.name}</h3>
            <Link to={`/encabulator-list/${encabulator.id}`}>Click here to learn more or add a review</Link>
        </div>
    )
}

export default EncabulatorCard