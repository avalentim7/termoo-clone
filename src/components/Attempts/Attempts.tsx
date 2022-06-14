import React, { useContext } from 'react';
import { AttemptsContext } from '../../context/AttemptsContext';
import AttemptKeys from './AttemptKeys/AttemptKeys';

import './Attempts.scss';

function Attempts() {
    const { attempt, wordAttempts } = useContext(AttemptsContext);

    return (
        <div className="attempts-container">
            {Object.values(wordAttempts).map((wordAttempt, i) => {
                return (
                    <div key={i} className={`attempt ${attempt === i + 1 ? 'actual-attempt' : attempt > i + 1 ? 'finished-attempt' : ''}`}>
                        <AttemptKeys
                            wordAttempt={wordAttempt}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Attempts;