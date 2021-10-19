import React from 'react';
import UserInput from '../../../UI/UserInput/UserInput';

import classes from './Answer.module.css';

const Answer = React.forwardRef((props, ref ) => {

    return (
        <section className={classes.answer}>
            <UserInput
                className={classes.answer__input}
                label={`${props.index + 1}.`}
                ref={ref}
            />
        </section>

    )
})

export default Answer;