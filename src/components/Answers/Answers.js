import React,  { useContext, useEffect, useRef } from 'react';

import GameContext from '../../store/game-context';
import Answer from './Answer/Answer';
import Button from '../../UI/Button/Button';

import classes from './Answers.module.css'; 


const Answers = (props) => {
    
    const gameCtx = useContext(GameContext);
    const inputsRef = useRef([]); 

    //creates dynamic array of input refs
    useEffect(() => {
        inputsRef.current = inputsRef.current.slice(0, gameCtx.numbers.length);
     }, [gameCtx.numbers]);

    const submitHandler = (event) => {
        event.preventDefault(); 
        getAnswer(); 
        props.onShowSummary(); 
    }

    const getAnswer = () => {
        gameCtx.numbers.forEach((number, i) => {
            const answer = inputsRef.current[i].value;
            const mistakes = number.split('')
                .map((mistake, i) => mistake === answer.split('')[i] ? null : i)
                .filter(mistake => mistake !== null);
            gameCtx.getAnswerHandler({
                number: number, 
                answer: answer, 
                mistakes: mistakes
            });
        })
    }

    const inputs = gameCtx.numbers.map((input, i) => {
        return (
            <Answer
                number={input}
                index={i} 
                key={i}
                ref={el => inputsRef.current[i] = el} 
            />
        )
    })

    return (
        <div className={classes.answers}>
            <p>Type what you memorize!</p>
            <form className={classes.form} onSubmit={submitHandler} >
                {inputs}
                <Button>Check</Button>
            </form>
        </div>
    )
}

export default Answers;