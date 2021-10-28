import React from 'react';
import Input from '../../../UI/Input/Input';

import classes from './Answer.module.css';

const Answer = React.forwardRef((props, ref ) => {

    // https://codepen.io/thebabydino/pen/mRrPwB   input like this 

    return (
        <section className={classes.answer}>
            <Input
                className={classes.answer__input}
                label={`${props.index + 1}.`}
                ref={ref}
            />
        </section>

    )
})

export default Answer;