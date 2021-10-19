import React, { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import classes from './Round.module.css';


const Round = (props) => {

    const [currentNumber, setCurrentNumber] = useState(0);

    const completeTimerHandler = () => {
        const updatedNumber = currentNumber + 1;
        if (updatedNumber === props.numbers.length) props.onEndMemorazing(); 
        else {
            setCurrentNumber(updatedNumber); 
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
                size={100}
                colors={[['#068a48', 1]]}   
                onComplete={completeTimerHandler}
            />
        </div>
    )
}

export default Round;


