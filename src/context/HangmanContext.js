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

    //Remember to add hangmans as argumnet when calling on function
    const randomWordFunc = (hangmans) => {
        // Saving random word from array in variable for possible use
        let hangmanWord = hangmans[Math.floor(Math.random() * hangmans.length)];
    }

const values = {
    hangmans,
    randomWordFunc
}

return (
    <HangmanContext.Provider value={values}>
        {props.children}
    </HangmanContext.Provider>
)
}

export default HangmanProvider;