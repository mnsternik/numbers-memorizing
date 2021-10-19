import React, { useEffect, useState } from 'react'; 

import classes from './SummaryItem.module.css'; 

const SummaryItem = (props) => {

    const [coloredNumber, setColoredNumber] = useState(); 

    useEffect(() => {
        const cNumber = props.correctNumber.split(''); 
        const uNumber = props.userAnswer.split(''); 
        const colored = uNumber.map((n, i) => n === cNumber[i] ? n : `<span style="color:red">${n}</span>`).join('');
        setColoredNumber(colored);
    }, [])

    return (
        <section className={classes.item}>
            <div className={classes.item__numeration}>
                <span>{`${props.index + 1}.`}</span>
            </div>
            <div className={classes.item__content}>
                <p dangerouslySetInnerHTML={{ __html: coloredNumber }}></p>
                {props.mistakes.length !== 0 && <p>{`Correct: ${props.correctNumber}`}</p>} 
                <p>{`Mistakes: ${props.mistakes.length}`}</p> 
            </div>
        </section>
    )
}

export default SummaryItem; 

