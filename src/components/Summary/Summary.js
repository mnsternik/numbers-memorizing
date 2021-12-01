import React, { useContext } from 'react';

import GameContext from '../../store/game-context';
import SummaryItem from './SummaryItem/SummaryItem';
import Button from '../../UI/Button/Button';

import classes from './Summary.module.css'; 

const Summary = (props) => {

    const gameCtx = useContext(GameContext); 
    const score = gameCtx.getScore(); 

    let message; 
    if (score < 1) message = `Oops! Looks like you haven't memorize anything.`;
    else if (score < 100) message = `You memorized correctly ${score}% of all digits!`;
    else  message = `Congratulations! You memorized everything!`;

    const summary = gameCtx.answers.map((answer, i) => {
        return (
            <SummaryItem 
                key={i}
                index={i} 
                correctNumber={answer.number}
                userAnswer={answer.answer}
                mistakes={answer.mistakes}
            />
        )
    })
    
    return (
        <div className={classes.summary}>
            <h2>{message}</h2>
            {summary}
            <Button onClick={props.onReplay}>Try again</Button>
        </div>
    )
}

export default Summary;