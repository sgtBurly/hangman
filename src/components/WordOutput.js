import react from "react";
import style from "../styles/WordOutput.module.css"
import  { useContext } from "react";
import { HangmanContext } from "../context/HangmanContext";

const WordOutput = () => {
const { wordToGuess} = useContext(HangmanContext);

    return (
        <div className={style.WordOutput}>
            <div className={style.wordWrapper}>
                <div className={style.LetterBox}>
                    <p className={style.Letter}>{wordToGuess}</p>
                </div>
            </div>
        </div>
    );
}

export default WordOutput;