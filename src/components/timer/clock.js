import React, { Component } from 'react';
import { POM_TIMER, SHORT_BREAK, LONG_BREAK } from '../../constants';

const Clock = ({displayedTime, play, pause, timeType}) => {
    let gif;
    if (timeType === POM_TIMER.time) {
        gif = <iframe src="https://giphy.com/embed/IPbS5R4fSUl5S" width="400" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
    } else if (timeType === SHORT_BREAK.time) {
        gif = <iframe src="https://giphy.com/embed/muCo9BLS7vjErTON27" width="400" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
    } else if (timeType === LONG_BREAK.time) {
        gif = <iframe src="https://giphy.com/embed/3ov9jVajUykLpFTMQM" width="400" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
    } else {
        gif = <iframe src="https://giphy.com/embed/w7mLEAMcpjrpe" width="400" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>  
        
    }
    return(
        <div className="clock-container">
            <span className="clock">{displayedTime}</span>
            <div className="buttons-container">
                <span onClick={play} className="button">Play</span>
                <span onClick={pause} className="button">Pause</span>
            </div>
            {gif}
        </div>
    )
}

export default Clock;