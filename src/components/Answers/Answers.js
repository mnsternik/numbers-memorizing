import React, { useState } from 'react';

import Answer from './Answer/Answer';

const Answers = (props) => {

    const [answers, setAnswers] = useState([]);

    const onCheckAnswersHandler = (answer) => {
        const updatedAnswers = answers;  
        updatedAnswers.push(answer);   
        setAnswers(updatedAnswers); 
        showAnwser();
    }

    const showAnwser = () => {
        console.log(answers);
    }

    const inputs = props.numbers.map((input, index) => {
        return (
            <Answer
                number={input}
                index={index} 
                key={index}
                onCheckAnswers={onCheckAnswersHandler}
            />
        )
    })


    return (
        <div>
            {inputs}
            <button onClick={onCheckAnswersHandler}>Check numbers</button>
        </div>
    )
}

export default Answers;