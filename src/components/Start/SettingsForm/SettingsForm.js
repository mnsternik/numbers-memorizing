import React, { useRef, useState } from 'react';

import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Button/Button';

import classes from './SettingsForm.module.css';


const SettingsForm = (props) => {

    const numberLength = useRef();
    const listLength = useRef();
    const secondsPerNumber = useRef();
    const [isFormEmpty, setIsFormEmpty] = useState(); 

    const submitHandler = (event) => {
        event.preventDefault();
        const settings = {
            numberLength: +numberLength.current.value,
            listLength: +listLength.current.value,
            secondsPerNumber: +secondsPerNumber.current.value
        }
        const isEmpty = Object.values(settings).some(setting => !setting);
        setIsFormEmpty(isEmpty); 
        if (!isEmpty) props.onStartGame(settings); 
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            {isFormEmpty && <p className={classes.message}>Please fill the data</p>}
            <Input
                label='Number of digits:'
                ref={numberLength}
                type='number'
                default={3}
                min={1}
                max={999}
                step={1}
            />
            <Input
                label='Number of numbers:'
                ref={listLength}
                type='number'
                default={3}
                min={1}
                max={100}
                step={1}
            />
            <Input
                label='Seconds per number:'
                ref={secondsPerNumber}
                default={3}
                type='number'
                min={1}
                max={300}
                step={1}
            />
            <Button newClasses={classes.button}>Start</Button>
        </form >
    )
}

export default SettingsForm;