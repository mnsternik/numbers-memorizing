import React, { useEffect, useState } from 'react';

import classes from './SummaryItem.module.css';

const SummaryItem = (props) => {

    const { correctNumber, userAnswer } = props;

    const [coloredNumber, setColoredNumber] = useState();

    const hasMistakes = props.mistakes.length > 0;
    const hasAnswer = props.userAnswer.length > 0;

    useEffect(() => {
        const correct = correctNumber.split('');
        const answer = userAnswer.split('');
        const colored = answer.map((n, i) => n === correct[i] ?
            `<span style="color:green; font-weight:bold">${n}</span>` :
            `<span style="color:red; font-weight:bold">${n}</span>`).join('');

        setColoredNumber(colored);
    }, [correctNumber, userAnswer])

    return (
        <section className={classes.item}>
            <div className={classes.item__numeration}>
                <span>{`${props.index + 1}.`}</span>
            </div>
            <div className={classes.item__content}>
                {hasAnswer ?
                    <p dangerouslySetInnerHTML={{ __html: `<span>Answer:</span> ${coloredNumber}` }} /> :
                    <p className={classes.emptyAnswer}><span>Answer: </span> None</p>
                }
                {hasMistakes &&
                    <p><span>Correct: </span>{props.correctNumber}</p>
                }
                {hasMistakes ?
                    <p><span>Mistakes: </span>{props.mistakes.length}</p> :
                    <p className={classes.correct}>No mistakes!</p>
                }
            </div>
        </section>
    )
}

export default SummaryItem;

