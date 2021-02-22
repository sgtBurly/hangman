import react from "react";
import style from "../styles/WordOutput.module.css"
import  { useContext, useEffect, useState } from "react";
import { HangmanContext } from "../context/HangmanContext";

const WordOutput = () => {
    const { splitGuessedWord } = useContext(HangmanContext);

    // Later... variable from Context
    //const { correctLetters } = useContext(HangmanContext);
    const correctLetter = 'o';
    console.log(splitGuessedWord);
    const [outputArray, setOutputArray] = useState([]);
    console.log(outputArray);

    useEffect(()=>{
        if(splitGuessedWord){
            const tempArray = [];
            splitGuessedWord.forEach(letter => {
                 tempArray.push("");
            });
            setOutputArray(tempArray)
            console.log(outputArray);


            //const index = splitGuessedWord.indexOf(guessedLetter);
            //emptyArray[index] = guessedLetter;
        }
    }, [splitGuessedWord]);

    useEffect(()=> {

         //User guesses a right letter. Will be variable from Context and updated with useEffect
         if(outputArray && splitGuessedWord) {
            splitGuessedWord.forEach((letter, i) => {
            if (letter === correctLetter){
                setOutputArray([...outputArray.slice(0,i), letter, ...outputArray.slice(i+1,outputArray.length-1)])
                //setOutputArray([...outputArray.splice(i, 0, letter)])
                //outputArray[i] = letter
            }
        })}
    }, [correctLetter])


    // useEffect(() => {
    //     if(correctLetters){
    //         splitGuessedWord.forEach((letter, i) => {
    //             if (letter === correctLetters[correctLetters.length-1]){
    //                 outputArray[i] = letter
    //             }
    //         })
    //     }
    // }, [correctLetters]);


    return (
        <div className={style.WordOutput}>
            <div className={style.wordWrapper}>
                {splitGuessedWord && outputArray.map((letter, i) => (
                    <div className={style.LetterBox} key={i}>
                    <p className={style.Letter}>{letter}</p>
                </div>
                ))}
            </div>
        </div>
    );
}

export default WordOutput;