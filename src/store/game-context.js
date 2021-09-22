import { createContext } from "react";

const GameContext = createContext({
    numberLength: 0, 
    numbers: [], 
    answers: [],
    secondsPerNumber: 0,

})

export default CartContext