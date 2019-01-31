import React, { Component } from 'react';

const Button = ({title, changeTime, time}) => {
    return(
        <div onClick={() => changeTime(time)}>
            {title}
        </div>
    )
}

export default Button;