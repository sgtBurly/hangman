import react from "react";
import style from "../styles/WordOutput.module.css"
import  { useContext, useEffect, useState } from "react";
import { HangmanContext } from "../context/HangmanContext";

const WordOutput = () => {
    const { splitGuessedWord } = useContext(HangmanContext);

    // Variable from Context
    const { correctLetter } = useContext(HangmanContext);
    //const correctLetter = 'o';
    console.log(splitGuessedWord);
    const [outputArray, setOutputArray] = useState([]);

    // Check if user has guessed the right word
    const [rightAnswers, setRightAnswers] = useState(0)

    useEffect(()=>{
        if(splitGuessedWord){
            const tempArray = [];
            splitGuessedWord.forEach(letter => {
                 tempArray.push("");
            });
            setOutputArray(tempArray)
            console.log(outputArray);
        }
    }, [splitGuessedWord]);

    useEffect(()=> {
         //User guesses a right letter. Will be variable from Context and updated with useEffect
         if(outputArray && splitGuessedWord) {
            let tempArray = [...outputArray];
            splitGuessedWord.forEach((letter, i) => {
                if (letter === correctLetter){
                    tempArray = [...tempArray.slice(0,i), letter, ...tempArray.slice(i+1,tempArray.length)];
                    setRightAnswers(prevState => prevState+1)
                    //console.log('tempArray', tempArray);
                }
            })
            setOutputArray(tempArray)
        }
    }, [correctLetter]);

    useEffect(()=> {
        console.log('Number of right answers:',rightAnswers)
         if(splitGuessedWord && rightAnswers === splitGuessedWord.length) {
            let winMusic = new Audio("https://www.myinstants.com/media/sounds/celebration.mp3");
            winMusic.play();
            alert('You got it right!');

        }
    }, [rightAnswers]);


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