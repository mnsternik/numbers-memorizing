import React, { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import classes from './Round.module.css';


const Round = (props) => {

    const [currentNumber, setCurrentNumber] = useState(0);

    const completeTimerHandler = () => {
        let current = currentNumber + 1;
        if (current === props.numbers.length) {
            props.onEnd(); 
        } else {
            setCurrentNumber(current); 
            return [true, 0]
        }
    }

    return (
        <div className={classes.round}>
            <p>{props.numbers[currentNumber]}</p>
            <CountdownCircleTimer
                className={classes.timer}
                isPlaying
                duration={props.seconds}
                colors={[['#46a3e0', 0.33], ['#f1c950', 0.33], ['#e24d4d', 0.33]]}
                onComplete={completeTimerHandler}
            />
        </div>
    )
}


export default Round;


