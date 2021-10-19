import React, { useRef, useState } from 'react';

import UserInput from '../../../UI/UserInput/UserInput';

import classes from './SettingsForm.module.css';

const SettingsForm = (props) => {


    const numberLength = useRef();
    const listLength = useRef();
    const secondsPerNumber = useRef();
    const [isFormEmpty, setIsFormEmpty] = useState(); 

    const submitFormHandler = (event) => {
        event.preventDefault();
        const settings = {
            numberLength: +numberLength.current.value,
            listLength: +listLength.current.value,
            secondsPerNumber: +secondsPerNumber.current.value
        }
        const isEmpty = Object.values(settings).some(s => s === null || s === '' || s === 0);
        setIsFormEmpty(isEmpty); 
        if (isEmpty) return;
        else props.onStartGame(settings); 
    }

    return (
        <form className={classes.form} onSubmit={submitFormHandler}>
            {isFormEmpty && <p className={classes.message}>Please fill the data</p>}
            <UserInput
                label='Number of digits'
                ref={numberLength}
                type='number'
                min={1}
                max={999}
                step={1}
            />
            <UserInput
                label='Number of numbers'
                ref={listLength}
                type='number'
                min={1}
                max={100}
                step={1}
            />
            <UserInput
                label='Seconds per number'
                ref={secondsPerNumber}
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