import React, { useContext } from 'react';
import { AttemptsContext } from '../../../context/AttemptsContext';

import words from '../../../words.json';

interface AttemptKeysProps {
    wordAttempt: string;
}

function AttemptKeys({ wordAttempt }: AttemptKeysProps) {
    const { selectedPosition, handleChangeKeyPosition } = useContext(AttemptsContext);
    const wordOfTheDay = words[0].word.toUpperCase();
    const wordSplitted = wordOfTheDay.split("");

    const getClass = (position: number) => {
        return `key ${selectedPosition === position ? ' --selected' : ''}    
        ${wordSplitted[position - 1] === wordAttempt[position] ?
                ' --correct-position' :
                wordOfTheDay.indexOf(wordAttempt[position]) !== -1 ?
                    '--incorrect-position' :
                    ''
            }`
    }

    return (
        <>
            <div
                onClick={() => handleChangeKeyPosition(1)}
                className={getClass(1)}
            >
                {[wordAttempt[1]]}
            </div>
            <div
                onClick={() => handleChangeKeyPosition(2)}
                className={getClass(2)}
            >
                {[wordAttempt[2]]}
            </div>

            <div
                onClick={() => handleChangeKeyPosition(3)}
                className={getClass(3)}
            >
                {[wordAttempt[3]]}
            </div>
            <div
                onClick={() => handleChangeKeyPosition(4)}
                className={getClass(4)}
            >
                {[wordAttempt[4]]}
            </div>
            <div
                onClick={() => handleChangeKeyPosition(5)}
                className={getClass(5)}
            >
                {[wordAttempt[5]]}
            </div>
        </>
    )
}

export default AttemptKeys;