import React from 'react';

import classes from './StartGame.module.css';

import SettingsForm from './SettingsForm/SettingsForm';

const StartGame = (props) => {
    return (
        <React.Fragment>
            <div className={classes.header}>
                <h1>Remembering numbers</h1>
                <p>If you want to practice your memory for numbers you came to right website!</p>
                <p>Choose number of digits, number of numbers and number of seconds for your practice.</p>
            </div>
            <SettingsForm onStart={props.onStart}/>
        </React.Fragment>
    )
}

export default StartGame;