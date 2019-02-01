import React, { Component } from 'react';

const Button = ({title, changeTime, time}) => {
    return(
        <div onClick={() => changeTime(time)} className="button">
            {title}
        </div>
    )
}

export default Button;