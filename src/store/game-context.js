import React, { createContext, useState } from "react";

const GameContext = createContext({
    secondsPerNumber: 0,
    numbers: [],
    answers: [],
    generateListOfRandomNumbers: (listLength, numberLength) => {},
    getAnswerHandler: (answer) => {},
    getSettingsHandler: (settings) => {},
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

    return (
        <GameContext.Provider
            value={{
                secondsPerNumber: secondsPerNumber,
                numbers: numbers,
                answers: answers,
                generateListOfRandomNumbers: generateListOfRandomNumbers,
                getAnswerHandler: getAnswerHandler,
                getSettingsHandler: getSettingsHandler
            }}>
            {props.children}
        </GameContext.Provider>
    )
}

export default GameContext; 