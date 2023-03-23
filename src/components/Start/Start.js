import React from 'react';

import classes from './Start.module.css';

import SettingsForm from './SettingsForm/SettingsForm';
import brainImg from './../../assets/brain-icon.png';


const Start = (props) => {

    return (
        <>
            <div className={classes.header}>

                <div className={classes.header__logo}>
                    <h1>MEMORIZING NUMBERS</h1>
                    <img src={brainImg} alt='brain' />
                </div>

                <section>
                    <p>Want to test your memory?</p>
                    <p>Choose how big numbers and how much of them you want to try to memorize</p>
                </section>

            </div>

            <SettingsForm onStartGame={props.onStartGame} />

        </>
    )
}

export default Start;