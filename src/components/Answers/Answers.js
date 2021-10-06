import React,  { useContext, useEffect, useRef, useState } from 'react';

import GameContext from '../../store/game-context';
import Answer from './Answer/Answer';

import classes from './Answers.module.css'; 

const Answers = (props) => {
    
    const gameCtx = useContext(GameContext);
    const inputsRef = useRef([]); 
    const [showAnswers, setShowAnswers] = useState(false); 

    useEffect(() => {
        inputsRef.current = inputsRef.current.slice(0, gameCtx.numbers.length);
     }, [gameCtx.numbers]);

    const submitHandler = (event) => {
        event.preventDefault(); 
        gameCtx.numbers.forEach((num, i) => {
            let number = num; 
            let answer = inputsRef.current[i].value;
            // map mistakes instead of for loop
            let mistakes = []; 
            for (let i = 0; i < number.length; i++) {
                if (number[i] !== answer[i]) mistakes.push(i); 
            }
            const answerInfo = {
                number: num, 
                answer: inputsRef.current[i].value, 
                mistakes: mistakes
            }
            gameCtx.getAnswerHandler(answerInfo)
        })
        setShowAnswers(true);
    }

    const inputs = gameCtx.numbers.map((input, i) => {
        return (
            <Answer
                number={input}
                index={i} 
                key={i}
                ref={el => inputsRef.current[i] = el} 
                showAnswer={showAnswers}
            />
        )
    })

    return (
        <form className={classes.form} onSubmit={submitHandler} >
            {inputs}
            <button>Check numbers</button>
        </form>
        
    )
}

export default Answers;