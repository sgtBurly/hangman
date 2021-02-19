import react from "react";
import style from "../styles/WordOutput.module.css"
import  { useContext } from "react";
import { HangmanContext } from "../context/HangmanContext";

const WordOutput = () => {
const { splitGuessedWord } = useContext(HangmanContext);

    return (
        <div className={style.WordOutput}>
            <div className={style.wordWrapper}>
                {splitGuessedWord && splitGuessedWord.map((letter, i) => (
                    <div className={style.LetterBox} key={i}>
                    <p className={style.Letter}>{letter}</p>
                </div>
                ))}
            </div>
        </div>
    );
}

export default WordOutput;