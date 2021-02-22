import { createContext, useState, useEffect } from "react";
export const HangmanContext = createContext();


export function HangmanProvider (props) {
    const [hangmans, setHangmans] = useState([
        {
            // adding boolean for possible logic use in game
            hangman: "cat",
            boolean: false
        },
        {
            hangman: "kanelbulle",
            boolean: false
        },
        {
            hangman: "datortekniker",
            boolean: false
        },
        {
            hangman: "medieinstitutet",
            boolean: false
        },
        {
            hangman: "react",
            boolean: false
        },
        {
            hangman: "vue",
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
        console.log('In getLetter', splitGuessedWord);
        const guess = splitGuessedWord.includes(letter);

        if(guess) {
            setCorrectLetter(letter);
              console.log("MATCH")
        } else {
            setLives(prevState => prevState-1)
            console.log('No match')
        }

        /* splitGuessedWord.forEach(letterInWord => {
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
                //console.log("No match")
                //console.log("this is letterInWord " + letterInWord)
            //}
          //})
          /*
          console.log(letter);
          console.log("this is props letter " + letter)
          console.log("This is correct letters array " + correctLetters)
          */
        }
        useEffect(()=> {
            if (lives < 1) {
              alert("You got hanged! Lmao");
              let hangedMusic = new Audio("https://ia802905.us.archive.org/35/items/cd_golden-anniversary-celebration_the-four-freshmen/disc1/17.%20The%20Four%20Freshmen%20-%20Tom%20Dooley%20%281962%29_sample.mp3");
              hangedMusic.play();
            }
        }, [lives])
        //Decrements 1 life every time the user guesses a wrong letter(based on the wrongLetters array)
    //     useEffect(() => {
    //     setLives(prevLives => prevLives - 1);
    //     console.log("This is lives " + lives)
    // }, [wrongLetters]);


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