import React, { useContext, useState } from 'react';
import { AttemptsContext } from '../../context/AttemptsContext';
import AttemptKeys from './AttemptKeys/AttemptKeys';

import './Attempts.scss';

function Attempts() {
    const { handleTeste } = useContext(AttemptsContext);

    //TODO: Realizar o Handle do AttemptKeys

    return (
        <div className="attempts-container">
            <div className="attempt first-attempt finished-attempt">
                <AttemptKeys />
            </div>
            <div className="attempt second-attempt actual-attempt">
                <AttemptKeys />
            </div>
            <div className="attempt third-attempt">
                <AttemptKeys />
            </div>
            <div className="attempt fourth-attempt">
                <AttemptKeys />
            </div>
            <div className="attempt fifth-attempt">
                <AttemptKeys />
            </div>
            <div className="attempt sixth-attempt">
                <AttemptKeys />
            </div>
        </div>
    )
}

export default Attempts;