import React, { useContext, useEffect, useState } from 'react';

import GameContext from '../../store/game-context';
import SummaryItem from './SummaryItem/SummaryItem';
import Button from '../../UI/Button/Button';

import classes from './Summary.module.css'; 

const Summary = (props) => {

    const [showAnswers, setShowAnswers] = useState(false);
    const [score, setScore] = useState(); 
    const gameCtx = useContext(GameContext); 

    //calculating score 
    useEffect(() => {
        console.log(gameCtx.answers);
        const mistakes = gameCtx.answers.reduce((ac, n) => ac + n.mistakes.length, 0)
        const digits = gameCtx.answers.reduce((ac, n) => ac + n.number.length, 0)
        setScore(Math.floor(((digits - mistakes) / digits) * 100));
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
            <Button onClick={toggleAnswersHandler}>
                    {showAnswers ? 'Hide answers' : 'Show answers'}
            </Button>
            <Button onClick={props.onReplay}>
                    Try again!
            </Button>
            {showAnswers && summary}
        </div>
    )
}

export default Summary;