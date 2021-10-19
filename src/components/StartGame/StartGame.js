import React from 'react';

import classes from './StartGame.module.css';

import SettingsForm from './SettingsForm/SettingsForm';
import brainImg from './../../assets/brain-icon.png';

const StartGame = (props) => {
    //add gradient to header
    
    return (
        <React.Fragment>
            <div className={classes.header}>
                <div className={classes.header__logo}>
                    <h1>MEMORAZING NUMBERS</h1>
                    <img src={brainImg} alt='brain'/>
                </div>
                <section>
                    <p>Want to test your memory?</p>
                    <p>Choose how big numbers and how much of them you want to try to memorize</p>
                </section>
            </div>
            <SettingsForm onStartGame={props.onStartGame}/>
        </React.Fragment>
    )
}

export default StartGame;