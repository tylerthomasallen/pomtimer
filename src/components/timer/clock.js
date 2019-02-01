import React, { Component } from 'react';

const Clock = ({displayedTime, play, pause}) => {
    return(
        <div className="clock-container">
            <span className="clock">{displayedTime}</span>
            <div className="buttons-container">
                <span onClick={play} className="button">Play</span>
                <span onClick={pause} className="button">Pause</span>
            </div>
        </div>
    )
}

export default Clock;