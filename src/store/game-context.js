import React, { createContext, useReducer } from "react";

const initGameState = {
    secondsPerNumber: 0,
    numbers: [],
    answers: [],
    mistakes: [],
};

const GameContext = createContext({
    ...initGameState,
    dispatchGameState: (action) => { },
    resetContext: () => { }
})

export const GameContextProvider = (props) => {

    const [gameState, dispatchGameState] = useReducer((state, action) => {
        return { ...state, ...action }
    }, initGameState)

    const resetContext = () => {
        dispatchGameState(initGameState)
    };

    return (
        <GameContext.Provider
            value={{
                ...gameState,
                dispatchGameState: dispatchGameState,
                resetContext: resetContext
            }}>

            {props.children}

        </GameContext.Provider>
    )
}

export default GameContext;