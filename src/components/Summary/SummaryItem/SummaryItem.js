import React, { useEffect, useState } from 'react'; 

import classes from './SummaryItem.module.css'; 

const SummaryItem = (props) => {

    const [coloredNumber, setColoredNumber] = useState(); 
    const isMistake = props.mistakes.length > 0; 
    const isAnswer = props.userAnswer.length > 0; 

    useEffect(() => {
        const correct = props.correctNumber.split(''); 
        const answer = props.userAnswer.split(''); 
        const colored = answer.map((n, i) => n === correct[i] ? n : `<span style="color:red; font-weight:bold">${n}</span>`).join('');
        setColoredNumber(colored);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className={classes.item}>
            <div className={classes.item__numeration}>
                <span>{`${props.index + 1}.`}</span>
            </div>
            <div className={classes.item__content}>
                {isAnswer ? <p dangerouslySetInnerHTML={{ __html: `<span>Answer:</span> ${coloredNumber}` }}/> : <p className={classes.emptyAnswer}><span>Answer: </span> None</p>}
                {isMistake && <p><span>Correct: </span>{props.correctNumber}</p>} 
                {isMistake ? <p><span>Mistakes: </span>{props.mistakes.length}</p> : <p className={classes.correct}>No mistakes!</p>} 
            </div>
        </section>
    )
}

export default SummaryItem; 

