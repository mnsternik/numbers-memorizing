import React, { useEffect, useState } from 'react'; 

import classes from './SummaryItem.module.css'; 

const SummaryItem = (props) => {

    const [coloredNumber, setColoredNumber] = useState(); 
    const isMistake = props.mistakes.length > 0; 
    const isAnswer = props.userAnswer.length > 0; 

    useEffect(() => {
        const cNumber = props.correctNumber.split(''); 
        const uNumber = props.userAnswer.split(''); 
        const colored = uNumber.map((n, i) => n === cNumber[i] ? n : `<span style="color:red">${n}</span>`).join('');
        setColoredNumber(colored);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className={classes.item}>
            <div className={classes.item__numeration}>
                <span>{`${props.index + 1}.`}</span>
            </div>
            <div className={classes.item__content}>
                {isAnswer ? <p dangerouslySetInnerHTML={{ __html: coloredNumber }}/> : <p className={classes.emptyAnswer}>Nothing memorized</p>}
                {isMistake && <p>{`Correct: ${props.correctNumber}`}</p>} 
                {isMistake ? <p>{`Mistakes: ${props.mistakes.length}`}</p> : <p className={classes.correct}>No mistakes!</p>} 
            </div>
        </section>
    )
}

export default SummaryItem; 

