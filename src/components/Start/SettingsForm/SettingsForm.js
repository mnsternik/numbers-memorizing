import React, { useRef, useContext } from 'react';
import GameContext from '../../../store/game-context';

import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Button/Button';

import classes from './SettingsForm.module.css';


const SettingsForm = (props) => {

    const gameCtx = useContext(GameContext);

    const numberLengthRef = useRef();
    const listLengthRef = useRef();
    const secondsPerNumRef = useRef();

    const generateListOfRandomNumbers = (listLength, numberLength) => {
        const numbers = Array(listLength).fill(0);
        return numbers.map(number => {
            number = Array(numberLength).fill(0);
            return number.map(() => Math.floor(Math.random() * 10)).join('');
        })
    };

    const submitSettingsHandler = (event) => {
        event.preventDefault();

        const listLength = parseInt(listLengthRef.current.value);
        const numberLength = parseInt(numberLengthRef.current.value);
        const secondsPerNumber = parseInt(secondsPerNumRef.current.value);

        const numbers = generateListOfRandomNumbers(listLength, numberLength);

        // gameCtx.setNumbersHandler(numbers);
        // gameCtx.setSecondsPerNumberHandler(secondsPerNumber);

        gameCtx.dispatchGameState({
            numbers: numbers,
            secondsPerNumber: secondsPerNumber
        })

        props.onStartGame();
    };

    return (
        <form className={classes.form} onSubmit={submitSettingsHandler}>

            <Input
                label='How many digits in one number:'
                ref={numberLengthRef}
                type='number'
                defaultValue={9}
                min={1}
                max={999}
                step={1}
            />
            <Input
                label='How many numbers:'
                ref={listLengthRef}
                type='number'
                defaultValue={1}
                min={1}
                max={100}
                step={1}
            />
            <Input
                label='How many seconds to memorize one number:'
                ref={secondsPerNumRef}
                defaultValue={5}
                type='number'
                min={1}
                max={300}
                step={1}
            />

            <Button newClasses={classes.button}>Start</Button>

        </form>
    )
}

export default SettingsForm;