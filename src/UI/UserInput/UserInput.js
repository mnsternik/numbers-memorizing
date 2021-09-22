import React from 'react';

import classes from './UserInput.module.css';

const UserInput = React.forwardRef((props, ref ) => {
    return (
        <div className={classes.input}>
            <label>{props.label}</label>
            <input 
                {...props.input} 
                ref={ref}
                value={props.value}
                onChange={props.onChange}
                type={props.type}
                max={props.max}
                min={props.min}
                step={props.step}
            />
        </div>
    )
})

export default UserInput;