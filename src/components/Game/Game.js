import React, { useState, useContext } from 'react';

import classes from './Game.module.css';

import Start from '../Start/Start';
import Round from './../Round/Round'; 
import Answers from '../Answers/Answers';
import Summary from '../Summary/Summary';
import GameContext from '../../store/game-context';


const Game = () => {

    const gameCtx = useContext(GameContext);

    const [showStart, setShowStart] = useState(true);
    const [showRound, setShowRound] = useState(false); 
    const [showAnswers, setShowAnswers] = useState(false); 
    const [showSummary, setShowSummary] = useState(false); 

    const startGameHandler = (settings) => {
        gameCtx.getSettingsHandler(settings); 
        setShowStart(false); 
        setShowRound(true);
    }

    const showAnswersHandler = () => {
        setShowRound(false); 
        setShowAnswers(true); 
    }

    const showSummaryHandler = () => {
        setShowAnswers(false); 
        setShowSummary(true); 
    }

    const replayHandler = () => {
        gameCtx.clearDataHandler(); 
        setShowSummary(false); 
        setShowStart(true); 
    }

    return (
        <div className={classes.game}>
            {showStart && <Start onStartGame={startGameHandler}/>}
            {showRound && <Round 
                seconds={gameCtx.secondsPerNumber} 
                numbers={gameCtx.numbers} 
                onShowAnswers={showAnswersHandler}/>}
            {showAnswers && <Answers 
                numbers={gameCtx.numbers} 
                onShowSummary={showSummaryHandler}/>}
            {showSummary && <Summary onReplay={replayHandler}/>}
        </div>
    )
}

export default Game;