import React, { useState } from 'react';

import classes from './Game.module.css';

import StartGame from '../StartGame/StartGame';
import Round from './../Round/Round'; 
import Answers from '../Answers/Answers';


const Game = () => {

    const [showStartMenu, setShowStartMenu] = useState(true);
    const [memorazing, setMemorazing] = useState(false); 
    const [answering, setAsnwering] = useState(false); 
    const [numbers, setNumbers] = useState([]);
    const [secondsPerRound, setSecondsPerRound] = useState(); 

    //change numberOfRounds to listLength ??? 
    //change Round to Memorazing? 
    const generateListOfNumbers = (numberOfRounds, numberLength) => {
        const numbers = [];
        for (let i = 0; i < numberOfRounds; i++) {
            numbers.push(generateNumber(numberLength));
        } setNumbers(numbers);
    }

    const generateNumber = (numberLength) => {
        const number = Array(numberLength).fill(0);
        return number.map(() => Math.floor(Math.random() * 10)).join('');
    }

    const startGame = (settings) => {
        generateListOfNumbers(settings.numberOfRounds, settings.numberLength); 
        setSecondsPerRound(settings.secondsPerRound); 
        setShowStartMenu(false); 
        setMemorazing(true);
    }

    const endMemorazing = () => {
        setMemorazing(false); 
        setAsnwering(true); 
    }

    return (
        <div className={classes.game}>
            {showStartMenu && <StartGame onStart={startGame}/>}
            {memorazing && <Round seconds={secondsPerRound} numbers={numbers} onEnd={endMemorazing}/>}
            {answering && <Answers numbers={numbers}/>}
        </div>

    )

}

export default Game;