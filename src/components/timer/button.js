import React, { Component } from 'react';

const Button = ({title, changeTime, time}) => {
    return(
        <div onClick={() => changeTime(time)} className="button">
            <span>{title}</span>
        </div>
    )
}

export default Button;