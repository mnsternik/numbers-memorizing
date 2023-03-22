import React from 'react';
import Input from '../../../UI/Input/Input';

import classes from './Answer.module.css';

const AnswerItem = React.forwardRef((props, ref) => {

    // https://codepen.io/thebabydino/pen/mRrPwB   input like this 

    return (
        <section className={classes.answer}>
            <Input
                className={classes.input}
                label={`${props.index + 1}.`}
                type='answer'
                maxLength={props.number.length}
                ref={ref}
            />
        </section>

    )
})

export default AnswerItem;