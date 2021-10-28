import React, { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import classes from './Round.module.css';

const Round = (props) => {

    const [currentNumber, setCurrentNumber] = useState(0);
    const [timerKey, setTimerKey] = useState(0); 


    //CountdownCircleTimer accepts [true, 0] in onComplete to repeat timer 
    const completeTimerHandler = () => {
        const updatedNumber = currentNumber + 1;
        if (updatedNumber === props.numbers.length) props.onShowAnswers(); 
        else {
            setCurrentNumber(updatedNumber); 
            return [true, 0]
        }
    }

    const showNext = () => {
        setTimerKey(key => key + 1); 
        completeTimerHandler(); 
    }

    return (
        <div className={classes.round}>
            <p>{props.numbers[currentNumber]}</p>
            <CountdownCircleTimer
                className={classes.timer}
                key={timerKey}
                isPlaying
                duration={props.seconds}
                size={100}
                colors={[['#068a48', 1]]}   
                onComplete={completeTimerHandler}
            />
            <button onClick={showNext}>NEXT</button>
        </div>
    )
}

export default Round;


