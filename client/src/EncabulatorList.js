import React, { useState, useEffect } from 'react';
import EncabulatorCard from './EncabulatorCard';


const EncabulatorList = ({ encabulators }) => {
    const [encabList, setEncabList] = useState([])

    useEffect(() => {
        setEncabList(
            encabulators.map((item) => {
                return <EncabulatorCard key={item.id} encabulator={item} />
            })
        )
    }, [encabulators])

    if (!encabulators) return <h2>Loading...</h2>

    return (
        <div>
            <div>
                {encabList}
            </div>
        </div>
    )

}

export default EncabulatorList