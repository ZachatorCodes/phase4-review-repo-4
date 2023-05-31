import React, { useState, useEffect } from 'react';
import EncabulatorCard from './EncabulatorCard';
import AddEncabulatorForm from './AddEncabulatorForm';


const EncabulatorList = ({ encabulators, setEncabulators }) => {
    const [encabList, setEncabList] = useState([])
    const [newEncab, setNewEncab] = useState(false)

    useEffect(() => {
        setEncabList(
            encabulators.map((item) => {
                return <EncabulatorCard key={item.id} encabulator={item} />
            })
        )
    }, [encabulators])

    const onAddEncabClick = () => {
        setNewEncab(true)
    }

    if (!encabulators) return <h2>Loading...</h2>

    return (
        <div>
            <h1 id='EncabH1'>Browse through some encabulators</h1>
            <p id='EncabP'>Don't see you favorite encabulator? Click on the button to add a new one!</p>
            {newEncab === false ? <button id='encabAddButton' onClick={onAddEncabClick}>Click to add a new encabulator</button> : <AddEncabulatorForm setNewEncab={setNewEncab} setEncabulators={setEncabulators} encabulators={encabulators}/>}
            <div>
                {encabList}
            </div>
        </div>
    )

}



export default EncabulatorList