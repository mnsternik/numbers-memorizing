import React, { useContext, useEffect, useState } from 'react';

import GameContext from '../../store/game-context';
import SummaryItem from './SummaryItem/SummaryItem';

import classes from './Summary.module.css'; 

const Summary = (props) => {

    const [showAnswers, setShowAnswers] = useState(false);
    const [score, setScore] = useState(); 
    const gameCtx = useContext(GameContext); 

    useEffect(() => {
        let mistakes = 0;
        let totalDigits = 0; 
        gameCtx.answers.forEach(answer => {
            mistakes = mistakes + answer.mistakes.length; 
            totalDigits = totalDigits + answer.number.length;
        })
        setScore((((totalDigits - mistakes) / totalDigits) * 100).toFixed(0))
    }, [gameCtx.answers])
    

    const toggleAnswersHandler = () => {
        setShowAnswers(show => !show); 
    }

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
            <p>{`You memorized correctly ${score}% of all digits!`}</p>
            <button 
                className={classes.button} 
                onClick={toggleAnswersHandler}>
                    {showAnswers ? 'Hide answers' : 'Show answers'}
            </button>
            <button 
                className={classes.button} 
                onClick={props.onReplay}>
                    Try again!
            </button>
            {showAnswers && summary}
        </div>
    )
}

export default Summary;