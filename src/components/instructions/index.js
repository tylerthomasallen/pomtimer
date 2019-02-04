import React, { Component } from 'react';

const Instructions = (props) => {
    return(
        <div className="instructions-container">
            <h1>HOW IT WORKS</h1>
            <div className="instruction-items">
            <span>Step 1: Add tasks todo</span>
            <span>Step 2: Work for 25 minutes or one "Pomodoro"</span>
            <span>Step 3: Mark your completed tasks!</span>
            <span>Step 4: Take a short break</span>
            <span>Step 5: Repeat steps 1-4. After 4 Pomodoro, take a long break :)</span>
            </div>
        </div>
    )
}

export default Instructions;