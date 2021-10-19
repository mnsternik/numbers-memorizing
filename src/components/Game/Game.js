import React, { useState, useContext } from 'react';

import classes from './Game.module.css';

import StartGame from '../StartGame/StartGame';
import Round from './../Round/Round'; 
import Answers from '../Answers/Answers';
import Summary from '../Summary/Summary';
import GameContext from '../../store/game-context';


const Game = () => {

    const gameCtx = useContext(GameContext);

    const [showStartMenu, setShowStartMenu] = useState(true);
    const [memorazing, setMemorazing] = useState(false); 
    const [answering, setAsnwering] = useState(false); 
    const [showSummary, setShowSummary] = useState(false); 

    const startGameHandler = (settings) => {
        gameCtx.getSettingsHandler(settings); 
        setShowStartMenu(false); 
        setMemorazing(true);
    }

    //change name na moveToMemorazing?? or startAnswering
    const endMemorazingHandler = () => {
        setMemorazing(false); 
        setAsnwering(true); 
    }

    const endAnsweringHandler = () => {
        setAsnwering(false); 
        setShowSummary(true); 
    }

    return (
        <div className={classes.game}>
            {showStartMenu && <StartGame onStartGame={startGameHandler}/>}
            {memorazing && <Round seconds={gameCtx.secondsPerNumber} numbers={gameCtx.numbers} onEndMemorazing={endMemorazingHandler}/>}
            {answering && <Answers numbers={gameCtx.numbers} onEndAnswering={endAnsweringHandler}/>}
            {showSummary && <Summary />}
        </div>
    )
}

export default Game;