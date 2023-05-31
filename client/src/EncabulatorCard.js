import React from 'react';
import { Link } from 'react-router-dom';

const EncabulatorCard = ({ encabulator }) => {
    return (
        <div id='encabCard'>
            <img src={encabulator.image_url} id='encabCardPic'/>
            <h3>{encabulator.name}</h3>
            <Link id='listLink' to={`/encabulator-list/${encabulator.id}`}>Click here to learn more or add a review</Link>
        </div>
    )
}

export default EncabulatorCard