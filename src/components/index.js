import React, { Component } from 'react';
import Timer from './timer';
import ToDos from './todos';
import Instructions from './instructions';
import './index.css';

const Container = (props) => {
    return(
        <div>
            <Timer />
            <div className="container">
                <Instructions />
                <ToDos />
            </div>
        </div>
    )
}

export default Container;