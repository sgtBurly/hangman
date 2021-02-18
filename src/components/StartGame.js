import React from "react";
import { useContext } from 'react';
import { HangmanContext } from "../context/HangmanContext";

const StartGame = () => {

    const {startGame} = useContext(HangmanContext);

    return ( 
        <div className="startGame">
            <button onClick={startGame}>Start game</button>
        </div>
    );
}
 
export default StartGame;