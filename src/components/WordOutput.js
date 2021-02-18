import react from "react";
import {style} from "../styles/WordOutput.module.css"
import {useContext} from "react";
import {HangmanContext} from "../context/HangmanContext";

const WordOutput = () => {
    return (
        <div className="WordOutput">
            <div className="wordWrapper">
                <div className="letterBox">
                    
                </div>
            </div>
        </div>
    );
}

export default WordOutput;