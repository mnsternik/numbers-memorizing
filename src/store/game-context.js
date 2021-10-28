import React, { createContext, useState } from "react";

const GameContext = createContext({
    secondsPerNumber: 0,
    numbers: [],
    answers: [],
    getAnswerHandler: (answer) => {},
    getSettingsHandler: (settings) => {},
    clearDataHandler: () => {}, 
})

export const GameContextProvider = (props) => {

    const [secondsPerNumber, setSecondsPerNumber] = useState();
    const [numbers, setNumbers] = useState([]);
    const [answers, setAnswers] = useState([]);

    const getSettingsHandler = (settings) => {
        setSecondsPerNumber(settings.secondsPerNumber);
        setNumbers(generateListOfRandomNumbers(settings.listLength, settings.numberLength)); 
    }

    const generateListOfRandomNumbers = (listLength, numberLength) => {
        const numbers = Array(listLength).fill(0);
        return numbers.map(number =>  {
            number = Array(numberLength).fill(0);
            return number.map(() => Math.floor(Math.random() * 10)).join('');
        })
    }

    const getAnswerHandler = (answer) => {
        const updatedAnswers = answers;
        updatedAnswers.push(answer);
        setAnswers(updatedAnswers);
    }

    const clearDataHandler = () => {
        setSecondsPerNumber(null);
        setNumbers([]);
        setAnswers([]); 
    }

    return (
        <GameContext.Provider
            value={{
                secondsPerNumber: secondsPerNumber,
                numbers: numbers,
                answers: answers,
                getAnswerHandler: getAnswerHandler,
                getSettingsHandler: getSettingsHandler,
                clearDataHandler: clearDataHandler
            }}>
            {props.children}
        </GameContext.Provider>
    )
}

export default GameContext; 