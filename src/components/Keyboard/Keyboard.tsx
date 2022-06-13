import React from 'react';

import './Keyboard.scss';

function Keyboard() {
    return (
        <div className="keyboard-container">
            <div className="keyboard-content keyboard-top">
                <div className="key key-q">Q</div>
                <div className="key key-w">W</div>
                <div className="key key-e">E</div>
                <div className="key key-r">R</div>
                <div className="key key-t">T</div>
                <div className="key key-y">Y</div>
                <div className="key key-u">U</div>
                <div className="key key-i">I</div>
                <div className="key key-o">O</div>
                <div className="key key-p">P</div>
            </div>
            <div className="keyboard-content keyboard-middle">
                <div className="key key-a">A</div>
                <div className="key key-s">S</div>
                <div className="key key-d">D</div>
                <div className="key key-f">F</div>
                <div className="key key-g">G</div>
                <div className="key key-h">H</div>
                <div className="key key-j">J</div>
                <div className="key key-k">K</div>
                <div className="key key-l">L</div>
                <div className="key key-del">{'<<'}</div>
            </div>
            <div className="keyboard-content keyboard-bottom">
                <div className="key key-z">Z</div>
                <div className="key key-x">X</div>
                <div className="key key-c">C</div>
                <div className="key key-v">V</div>
                <div className="key key-b">B</div>
                <div className="key key-n">N</div>
                <div className="key key-m">M</div>
                <div className="key key-enter">ENTER</div>
            </div>
        </div>
    )
}

export default Keyboard;