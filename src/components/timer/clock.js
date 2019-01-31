import React, { Component } from 'react';

const Clock = ({displayedTime, play, pause}) => {
    return(
        <div>
            {displayedTime}
            <div onClick={play}>Play button</div>
            <div onClick={pause}>Pause</div>
        </div>
    )
}

export default Clock;