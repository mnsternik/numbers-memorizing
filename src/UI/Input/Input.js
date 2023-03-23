import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {

    const inputWidth = props.maxLength * 1.5;

    const answerInputStyle = {
        display: 'block',
        margin: '2em auto',
        border: 'none',
        padding: '0',
        width: `${inputWidth}ch`,
        background: `repeating-linear-gradient(90deg, 
		dimgrey 0, dimgrey 1ch, 
		transparent 0, transparent 1.5ch) 
		0 100%/ ${inputWidth - 0.5}ch 2px no-repeat`,
        font: `5ch droid sans mono, consolas, monospace`,
        letterSpacing: '0.5ch'
    };

    return (
        <div className={classes.input}>
            <label>{props.label}</label>
            <input
                ref={ref}
                style={props.type === 'answer' ? answerInputStyle : {}}
                className={props.inputClass || classes.input__field}
                {...props}
            />
        </div>
    )
})

export default Input;