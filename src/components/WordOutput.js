import react from "react";
import style from "../styles/WordOutput.module.css"
import  { useContext } from "react";
import { HangmanContext } from "../context/HangmanContext";

const WordOutput = () => {
    const { splitGuessedWord } = useContext(HangmanContext);
    // Later... variable from Context
    const guessedLetter = 'o';
    console.log(splitGuessedWord);
    const emptyArray = [];

    if(splitGuessedWord){
        splitGuessedWord.forEach(letter => {
             emptyArray.push("");
        });
        console.log(emptyArray);

        //User guesses a right letter. Will be variable from Context and updated with useEffect
        splitGuessedWord.forEach((letter, i) => {
            if (letter === guessedLetter){
                emptyArray[i] = letter
            }
        })
        //const index = splitGuessedWord.indexOf(guessedLetter);
        //emptyArray[index] = guessedLetter;
    }

    return (
        <div className={style.WordOutput}>
            <div className={style.wordWrapper}>
                {splitGuessedWord && emptyArray.map((letter, i) => (
                    <div className={style.LetterBox} key={i}>
                    <p className={style.Letter}>{letter}</p>
                </div>
                ))}
            </div>
        </div>
    );
}

export default WordOutput;