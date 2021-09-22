import React, { useRef } from 'react';

import UserInput from '../../../UI/UserInput/UserInput';

import classes from './SettingsForm.module.css';

const SettingsForm = (props) => {

    const numberLength = useRef();
    const numberOfRounds = useRef(); 
    const secondsPerRound = useRef(); 

    const submitFormHandler = (event) => {
        event.preventDefault();

        const settings = {
            numberLength: +numberLength.current.value,
            numberOfRounds: +numberOfRounds.current.value,
            secondsPerRound: +secondsPerRound.current.value
        }
        props.onStart(settings);
    }

    return (
        <form className={classes.form} onSubmit={submitFormHandler}>
            <UserInput
                label='Enter number of digits in single number'
                ref={numberLength}
                type='number'
                min={1}
                max={999}
                step={1}
            />
            <UserInput
                label='Enter amount of numbers to remember'
                ref={numberOfRounds}
                type='number'
                min={1}
                max={100}
                step={1}
            />
            <UserInput
                label='Enter time (in seconds) in which single number will be visible on the screen'
                ref={secondsPerRound}
                type='number'
                min={1}
                max={300}
                step={1}
            />

            <div className={classes.button}>
                <button>Start!</button>
            </div>
        </form >
    )
}

export default SettingsForm;