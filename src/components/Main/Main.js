import React, { useState } from 'react';

import Start from '../Start/Start';
import Memorizing from '../Memorizing/Memorizing';
import Answers from '../Answers/Answers';
import Summary from '../Summary/Summary';

import classes from './Main.module.css';

const Main = () => {

    const [showStart, setShowStart] = useState(true);
    const [showMemorizing, setShowMemorizing] = useState(false);
    const [showAnswers, setShowAnswers] = useState(false);
    const [showSummary, setShowSummary] = useState(false);

    const startGameHandler = () => {
        setShowStart(false);
        setShowMemorizing(true);
    }

    const showAnswersHandler = () => {
        setShowMemorizing(false);
        setShowAnswers(true);
    }

    const showSummaryHandler = () => {
        setShowAnswers(false);
        setShowSummary(true);
    }

    const replayHandler = () => {
        setShowSummary(false);
        setShowStart(true);
    }

    return (
        <div className={classes.game}>
            {showStart && <Start onStartGame={startGameHandler} />}
            {showMemorizing && <Memorizing onShowAnswers={showAnswersHandler} />}
            {showAnswers && <Answers onShowSummary={showSummaryHandler} />}
            {showSummary && <Summary onReplay={replayHandler} />}
        </div>
    )
}

export default Main;