import React,  { useContext, useEffect, useRef} from 'react';

import GameContext from '../../store/game-context';
import Answer from './Answer/Answer';

import classes from './Answers.module.css'; 

const Answers = (props) => {
    
    const gameCtx = useContext(GameContext);
    const inputsRef = useRef([]); 

    //create dynamic array of input refs
    useEffect(() => {
        inputsRef.current = inputsRef.current.slice(0, gameCtx.numbers.length);
     }, [gameCtx.numbers]);

    const submitHandler = (event) => {
        event.preventDefault(); 
        gameCtx.numbers.forEach((num, i) => {
            const answer = inputsRef.current[i].value;
            const mistakes = num.split('')
                .map((mistake, i) => mistake === answer.split('')[i] ? null : i)
                .filter(mistake => mistake !== null);
            const answerInfo = {
                number: num, 
                answer: answer, 
                mistakes: mistakes
            }
            gameCtx.getAnswerHandler(answerInfo);
        })
        props.onEndAnswering(); 
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
                <button>Check numbers</button>
            </form>
        </div>

        
    )
}

export default Answers;