import React, { useContext, useEffect, useRef, useState } from 'react';
import GameContext from '../../../store/game-context';
import UserInput from '../../../UI/UserInput/UserInput';

import classes from './Answer.module.css';


const Answer = React.forwardRef((props, ref ) => {

    const gameCtx = useContext(GameContext); 

    return (
        <section className={classes.answer}>
            {props.showAnswer && <p>{`Correct number: ${gameCtx.answers[props.index].number}`}</p>}
            <UserInput
                className={classes.answer__input}
                label={`${props.index + 1}.`}
                ref={ref}
            />
        </section>

    )
})

export default Answer;