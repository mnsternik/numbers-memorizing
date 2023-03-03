import React, { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import Button from '../../UI/Button/Button';

import classes from './Memorizing.module.css';

const Memorizing = (props) => {

    const [currentNumberIndex, setCurrentNumberIndex] = useState(0);

    const completeTimerHandler = () => {
        const newNumberIndex = currentNumberIndex + 1;
        if (newNumberIndex === props.numbers.length) {
            props.onShowAnswers();
        }
        else {
            setCurrentNumberIndex(newNumberIndex);
            //CountdownCircleTimer accepts [true, 0] in onComplete to repeat timer 
            return [true, 0]
        }
    };

    return (
        <div className={classes.round}>

            <p>{props.numbers[currentNumberIndex]}</p>

            <CountdownCircleTimer
                key={currentNumberIndex}
                isPlaying
                duration={props.seconds}
                size={100}
                colors={[['#5E5553', 1]]}
                onComplete={completeTimerHandler}
            />

            <Button onClick={completeTimerHandler}>Next</Button>

        </div>
    )
};

export default Memorizing;


