import React, { useState, useContext } from 'react';

import classes from './Game.module.css';

import StartGame from '../StartGame/StartGame';
import Round from './../Round/Round'; 
import Answers from '../Answers/Answers';
import GameContext from '../../store/game-context';


const Game = () => {

    const gameCtx = useContext(GameContext);

    const [showStartMenu, setShowStartMenu] = useState(true);
    const [memorazing, setMemorazing] = useState(false); 
    const [answering, setAsnwering] = useState(false); 

    const startGame = (settings) => {
        gameCtx.getSettingsHandler(settings); 
        setShowStartMenu(false); 
        setMemorazing(true);
    }

    //change name na moveToMemorazing?? or startAnswering
    const endMemorazing = () => {
        setMemorazing(false); 
        setAsnwering(true); 
    }

    return (
        <div className={classes.game}>
            {showStartMenu && <StartGame onStart={startGame}/>}
            {memorazing && <Round seconds={gameCtx.secondsPerNumber} numbers={gameCtx.numbers} onEnd={endMemorazing}/>}
            {answering && <Answers numbers={gameCtx.numbers}/>}
        </div>
    )
}

export default Game;