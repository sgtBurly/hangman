import { createContext, useState } from "react";
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
    const [lives, setLives] = useState(null)
    const [wordToGuess, setWordToGuess] = useState([])

    //Remember to add hangmans as argumnet when calling on function
    const randomWordFunc = () => {
        // Saving random word from array in variable for possible use
        let hangmanWord = hangmans[Math.floor(Math.random() * hangmans.length)].hangman;
        return hangmanWord;
    }

    const startGame = () => {

        setGame(true);
        setLives(10);
        console.log("you have just started the game!")
        setWordToGuess(randomWordFunc());
        console.log(wordToGuess)

    }
    //const splitGuessed
    const values = {
        hangmans,
        randomWordFunc,
        startGame,
        wordToGuess,
        game,
        lives
    }

    return (
        <HangmanContext.Provider value={values}>
            {props.children}
        </HangmanContext.Provider>
    )
}

export default HangmanProvider;