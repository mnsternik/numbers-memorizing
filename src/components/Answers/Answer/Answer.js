import React, { useState, useRef } from 'react';

import UserInput from '../../../UI/UserInput/UserInput';

const Answer = (props) => {

    const userInputNumber = useRef(); 

    const compareNumbers = () => {
        const userNumber = userInputNumber.current.value.split(''); 
        const actualNumber = props.number.toString().split(''); 
        const wrongPositions = []; 

        for (let i = 0; i < actualNumber.length; i++) {
            if (actualNumber[i] !== userNumber[i]) wrongPositions.push(i); 
        }

        const answerInfo = {
            numberIndex: props.index, 
            answer: actualNumber, 
            mistakes: wrongPositions
        }

        props.onCheckAnswers(answerInfo); 
    }


    return (
        <div>
            <UserInput
                label={`${props.index + 1}.`}
                ref={userInputNumber}
                
            />
            <button onClick={compareNumbers}>Compare</button>
        </div>

    )
}

export default Answer;