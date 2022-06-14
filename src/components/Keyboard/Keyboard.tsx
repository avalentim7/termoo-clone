import React, { useContext } from 'react';
import { AttemptsContext } from '../../context/AttemptsContext';

import './Keyboard.scss';

function Keyboard() {
    const {
        attempt,
        selectedPosition,
        handleSubmitAttempt,
        handleChangeWordAttempts
    } = useContext(AttemptsContext);

    return (
        <div className="keyboard-container">
            <div className="keyboard-content keyboard-top">
                <div onClick={() => handleChangeWordAttempts(selectedPosition, attempt, 'Q')} className="key key-q">Q</div>
                <div onClick={() => handleChangeWordAttempts(selectedPosition, attempt, 'W')} className="key key-w">W</div>
                <div onClick={() => handleChangeWordAttempts(selectedPosition, attempt, 'E')} className="key key-e">E</div>
                <div onClick={() => handleChangeWordAttempts(selectedPosition, attempt, 'R')} className="key key-r">R</div>
                <div onClick={() => handleChangeWordAttempts(selectedPosition, attempt, 'T')} className="key key-t">T</div>
                <div onClick={() => handleChangeWordAttempts(selectedPosition, attempt, 'Y')} className="key key-y">Y</div>
                <div onClick={() => handleChangeWordAttempts(selectedPosition, attempt, 'U')} className="key key-u">U</div>
                <div onClick={() => handleChangeWordAttempts(selectedPosition, attempt, 'I')} className="key key-i">I</div>
                <div onClick={() => handleChangeWordAttempts(selectedPosition, attempt, 'O')} className="key key-o">O</div>
                <div onClick={() => handleChangeWordAttempts(selectedPosition, attempt, 'P')} className="key key-p">P</div>
            </div>
            <div className="keyboard-content keyboard-middle">
                <div onClick={() => handleChangeWordAttempts(selectedPosition, attempt, 'A')} className="key key-a">A</div>
                <div onClick={() => handleChangeWordAttempts(selectedPosition, attempt, 'S')} className="key key-s">S</div>
                <div onClick={() => handleChangeWordAttempts(selectedPosition, attempt, 'D')} className="key key-d">D</div>
                <div onClick={() => handleChangeWordAttempts(selectedPosition, attempt, 'F')} className="key key-f">F</div>
                <div onClick={() => handleChangeWordAttempts(selectedPosition, attempt, 'G')} className="key key-g">G</div>
                <div onClick={() => handleChangeWordAttempts(selectedPosition, attempt, 'H')} className="key key-h">H</div>
                <div onClick={() => handleChangeWordAttempts(selectedPosition, attempt, 'J')} className="key key-j">J</div>
                <div onClick={() => handleChangeWordAttempts(selectedPosition, attempt, 'K')} className="key key-k">K</div>
                <div onClick={() => handleChangeWordAttempts(selectedPosition, attempt, 'L')} className="key key-l">L</div>
                <div onClick={() => handleChangeWordAttempts(selectedPosition, attempt, '')} className="key key-del">{'<<'}</div>
            </div>
            <div className="keyboard-content keyboard-bottom">
                <div onClick={() => handleChangeWordAttempts(selectedPosition, attempt, 'Z')} className="key key-z">Z</div>
                <div onClick={() => handleChangeWordAttempts(selectedPosition, attempt, 'X')} className="key key-x">X</div>
                <div onClick={() => handleChangeWordAttempts(selectedPosition, attempt, 'C')} className="key key-c">C</div>
                <div onClick={() => handleChangeWordAttempts(selectedPosition, attempt, 'V')} className="key key-v">V</div>
                <div onClick={() => handleChangeWordAttempts(selectedPosition, attempt, 'B')} className="key key-b">B</div>
                <div onClick={() => handleChangeWordAttempts(selectedPosition, attempt, 'N')} className="key key-n">N</div>
                <div onClick={() => handleChangeWordAttempts(selectedPosition, attempt, 'M')} className="key key-m">M</div>
                <div onClick={() => handleSubmitAttempt(attempt)} className="key key-enter">ENTER</div>
            </div>
        </div>
    )
}

export default Keyboard;