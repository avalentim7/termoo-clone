import React, { useState } from 'react';

function AttemptKeys() {
    const [selectedPosition, setSelectedPosition] = useState(1);

    const handleClick = (data) => {
        console.log(data);
        setSelectedPosition(data);
    }

    return (
        <>
            <div onClick={() => handleClick(1)} className={`key first-key${selectedPosition === 1 ? ' --selected' : ''}`}></div>
            <div onClick={() => handleClick(2)} className={`key second-key${selectedPosition === 2 ? ' --selected' : ''}`}></div>
            <div onClick={() => handleClick(3)} className={`key third-key${selectedPosition === 3 ? ' --selected' : ''}`}></div>
            <div onClick={() => handleClick(4)} className={`key fourth-key${selectedPosition === 4 ? ' --selected' : ''}`}></div>
            <div onClick={() => handleClick(5)} className={`key fifth-key${selectedPosition === 5 ? ' --selected' : ''}`}></div>

        </>
    )
}

export default AttemptKeys;