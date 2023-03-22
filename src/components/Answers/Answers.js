import React, { useContext, useEffect, useRef } from 'react';

import GameContext from '../../store/game-context';
import AnswerItem from './Answer/AnswerItem';
import Button from '../../UI/Button/Button';

import classes from './Answers.module.css';


const Answers = (props) => {

    const gameCtx = useContext(GameContext);
    const { numbers } = gameCtx;

    const inputsRef = useRef([]);

    //creates dynamic array of inputs refs and focus on 1st input
    useEffect(() => {
        inputsRef.current = inputsRef.current.slice(0, numbers.length);
        inputsRef.current[0].focus();
    }, [numbers]);

    const submitAnswersHandler = (event) => {
        event.preventDefault();

        const allAnswers = [];
        const allMistakes = [];

        numbers.forEach((number, i) => {
            const answer = inputsRef.current[i].value;
            const mistakesIndexes = [];

            for (let j = 0; j < number.length; j++) {
                if (number[j] !== answer[j]) {
                    mistakesIndexes.push(j);
                }
            }

            allMistakes.push(mistakesIndexes);
            allAnswers.push(answer);
        });

        gameCtx.dispatchGameState({
            answers: allAnswers,
            mistakes: allMistakes
        })

        props.onShowSummary();
    };

    const answersInputs = numbers.map((number, i) => (
        <AnswerItem
            number={number}
            index={i}
            key={i}
            ref={el => inputsRef.current[i] = el}
        />
    ));

    return (
        <div className={classes.answers}>
            <p>Type what you memorize!</p>
            <form className={classes.form} onSubmit={submitAnswersHandler} >
                {answersInputs}
                <Button type="submit">Check</Button>
            </form>
        </div>
    )
}

export default Answers;