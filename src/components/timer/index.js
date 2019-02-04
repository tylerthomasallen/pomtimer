import React, { Component } from 'react';
import { TIMER_BUTTONS_ARR } from '../../constants';
import Button from './button';
import Clock from './clock';
import './timer.css';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayedTime: "00:00",
            time: 0,
            ticking: false,
            timeType: 0
        }

        this.changeTime = this.changeTime.bind(this);
        this.updateDisplayedTime = this.updateDisplayedTime.bind(this);
        this.startTime = this.startTime.bind(this);
        this.stopTime = this.stopTime.bind(this);
    }

    async changeTime(time) {
        await this.setState({time});
        await this.setState({timeType: time})
        this.updateDisplayedTime();
    }

    async updateDisplayedTime() {
        const { time } = this.state;
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        if (seconds < 10) {
            seconds = `0${seconds}`
        }
        if (minutes === 0) {
            minutes = "00"
        }
        const displayedTime = `${minutes}:${seconds}`;
        await this.setState({displayedTime});
    }

    async startTime() {
        if (!this.state.ticking) {
            this.setState({ticking: true})
            const tick = setInterval(() => {
                if (this.state.ticking && this.state.time >= 1) {
                    let { time } = this.state;
                    time -= 1;
                    this.setState({ time });
                    this.updateDisplayedTime();
                } else {
                    clearInterval(tick);
                }
            }, 1000);
        }
    }

    async stopTime() {
        await this.setState({ticking: false})
    }



    render() {
        const { displayedTime, timeType } = this.state;
        return(
            <div className="upper-container">
                <div className="buttons-container">
                    {TIMER_BUTTONS_ARR.map((button, i) => {
                        return <Button key={i} title={button.title} time={button.time} changeTime={this.changeTime}/>
                    })}
                </div>
                <Clock displayedTime={displayedTime} play={this.startTime} pause={this.stopTime} timeType={timeType}/>
            </div>
        )
    }
}

export default Timer;