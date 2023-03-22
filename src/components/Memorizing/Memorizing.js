import React, { useState, useContext } from 'react';
import GameContext from '../../store/game-context';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import Button from '../../UI/Button/Button';

import classes from './Memorizing.module.css';

const Memorizing = (props) => {

    const gameCtx = useContext(GameContext);

    const [currentNumberIndex, setCurrentNumberIndex] = useState(0);

    const timerCompleteHandler = () => {
        const newNumberIndex = currentNumberIndex + 1;
        if (newNumberIndex === gameCtx.numbers.length) {
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

            <p>{gameCtx.numbers[currentNumberIndex]}</p>

            <CountdownCircleTimer
                key={currentNumberIndex}
                isPlaying
                duration={gameCtx.secondsPerNumber}
                size={100}
                colors={[['#5E5553', 1]]}
                onComplete={timerCompleteHandler}
            />

            <Button onClick={timerCompleteHandler}>Next</Button>

        </div>
    )
};

export default Memorizing;


