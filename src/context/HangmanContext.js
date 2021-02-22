import { createContext, useState, useEffect } from "react";
export const HangmanContext = createContext();


export function HangmanProvider (props) {
    const [hangmans, setHangmans] = useState([
        {
            // adding boolean for possible logic use in game
            hangman: "RandomWord1",
            boolean: false
        },
        {
            hangman: "RandomWord2",
            boolean: false
        },
        {
            hangman: "RandomWord3",
            boolean: false
        },
        {
            hangman: "RandomWord4",
            boolean: false
        },
        {
            hangman: "RandomWord5",
            boolean: false
        },
        {
            hangman: "RandomWord6",
            boolean: false
        },
    ])


    const [game, setGame] = useState(false)
    const [lives, setLives] = useState(10)
    const [wordToGuess, setWordToGuess] = useState();
    const [splitGuessedWord, setSplitGuessedWord] = useState();
    const [correctLetter, setCorrectLetter] = useState("");
    const [wrongLetters, setWrongLetters] = useState([]);
    //Remember to add hangmans as argumnet when calling on function
    const randomWordFunc = () => {
        // Saving random word from array in variable for possible use
        let hangmanWord = hangmans[Math.floor(Math.random() * hangmans.length)].hangman;
        return hangmanWord;
    }
    //The function that starts the game
    const startGame = () => {
        setGame(true);
        console.log("you have just started the game!")
        setWordToGuess(randomWordFunc());
        console.log(wordToGuess)
    }
    //Splits the random-word into seperate letters
    const splitFunction = () => {
        setSplitGuessedWord(wordToGuess.split(""));
        console.log(splitGuessedWord);
    }
    //Runs the split-function when a word is generated
    useEffect(() => {
        if (wordToGuess) {
            splitFunction();
        }
    }, [wordToGuess]);

      const getLetter = (letter) => {
        /*loop through word and check if clicked letter matches letter in word*/
        splitGuessedWord.forEach(letterInWord => {
            //If user guesses right this happens
            if (letterInWord === letter) {
              setCorrectLetter(letter);
              console.log("MATCH")
              console.log("This is the correctLetter" + correctLetter)
              console.log("this is letterInWord " + letterInWord)
            }
            //If user guesses wrong this happens
            else {
                setWrongLetters(...letter)
                /*subtract 1 life setLives(--);*/
                console.log("No match")
                console.log("this is letterInWord " + letterInWord)
            }
          })
          if (lives < 1) {
            alert("You got hanged! Lmao");
            let hangedMusic = new Audio("https://ia800600.us.archive.org/22/items/vasiljevs_10_201709/01.mp3");
            hangedMusic.play();
          }
        /*
        console.log(letter);
        console.log("this is props letter " + letter)
        console.log("This is correct letters array " + correctLetters)
        */
      }
        //Decrements 1 life every time the user guesses a wrong letter(based on the wrongLetters array)
        useEffect(() => {
        setLives(prevLives => prevLives - 1);
        console.log("This is lives " + lives)
    }, [wrongLetters]);


    const values = {
        hangmans,
        randomWordFunc,
        startGame,
        wordToGuess,
        game,
        lives,
        splitGuessedWord,
        getLetter,
        correctLetter
    }

    return (
        <HangmanContext.Provider value={values}>
            {props.children}
        </HangmanContext.Provider>
    )
}

export default HangmanProvider;