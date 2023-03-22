import React, { useContext } from 'react';

import GameContext from '../../store/game-context';
import SummaryItem from './SummaryItem/SummaryItem';
import Button from '../../UI/Button/Button';

import classes from './Summary.module.css';

const Summary = (props) => {

    const gameCtx = useContext(GameContext);

    const numbers = gameCtx.numbers;
    const answers = gameCtx.answers;
    const mistakes = gameCtx.mistakes;

    const mistakesSum = mistakes.reduce((sum, mistakes) => sum + mistakes.length, 0);
    const digitsSum = numbers.reduce((sum, number) => sum + number.length, 0);
    const score = Math.floor(((digitsSum - mistakesSum) / digitsSum) * 100);

    let message;
    if (score < 1) {
        message = `Oops! Looks like you haven't memorize anything.`;
    }
    else if (score < 100) {
        message = `You memorized correctly ${score}% of all digits!`;
    }
    else {
        message = `Congratulations! You memorized everything!`;
    }

    const replayClickHandler = () => {
        gameCtx.resetContext();
        props.onReplay();
    }

    const summary = answers.map((answer, i) => {
        return (
            <SummaryItem
                key={i}
                index={i}
                correctNumber={numbers[i]}
                userAnswer={answer}
                mistakes={mistakes[i]}
            />
        )
    })

    return (
        <div className={classes.summary}>
            <h2>{message}</h2>
            {summary}
            <Button onClick={replayClickHandler}>Try again</Button>
        </div>
    )
}

export default Summary;