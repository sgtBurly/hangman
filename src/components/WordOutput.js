import react from "react";
import {style} from "../styles/WordOutput.module.css"
import {useContext} from "react";
import {HangmanContext} from "../context/HangmanContext";

const WordOutput = () => {

    const {wordToGuess} = useContext(HangmanContext);

    const lettersArray = wordToGuess.split("");

    return (
        <div>
            { wordToGuess && 
            <div className="WordOutput">
                <div className="wordWrapper">
                {lettersArray.map((letter, i) => (                
                <div className="letterBox" key={i}> {letter}
                </div>
                ))}
                </div>
            </div>}
        </div>
    )
}
export default WordOutput;