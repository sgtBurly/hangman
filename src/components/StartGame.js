import React from "react";
import { useContext } from 'react';
import { HangmanContext } from "../context/HangmanContext";
import style from "../styles/StartGameBtn.module.css";

const StartGame = () => {

    const {startGame} = useContext(HangmanContext);

    return ( 
        <div className={style.StartGame}>
            <button onClick={startGame}>Start game</button>
        </div>
    );
}
 
export default StartGame;