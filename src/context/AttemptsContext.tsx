import React, { createContext, useState } from 'react';

export const AttemptsContext = createContext({});

export const AttemptsProvider = ({ children }) => {
    const [teste, setTeste] = useState(1);

    //TODO: Realizar o Handle do AttemptKeys
    
    const handleTeste = (data) => {
        setTeste(data)
    }

    return (
        <AttemptsContext.Provider value={{teste, handleTeste}}>
            {children}
        </AttemptsContext.Provider>
    )
}