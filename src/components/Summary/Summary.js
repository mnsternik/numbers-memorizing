import React, { useContext } from 'react';

import GameContext from '../../store/game-context';
import SummaryItem from './SummaryItem/SummaryItem';

import classes from './Summary.module.css'; 

const Summary = () => {

    const gameCtx = useContext(GameContext); 

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
            {summary}
        </div>
    )
}

export default Summary;