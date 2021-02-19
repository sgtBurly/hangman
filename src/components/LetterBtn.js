import React, { useContext, useEffect } from 'react'
import LetterBtnStyles from '../styles/LetterBtnStyles.module.css';
import { HangmanContext } from '../context/HangmanContext';

const LetterBtn = (props) => {
  const { splitGuessedWord } = useContext(HangmanContext);


  useEffect(() => {
    if (splitGuessedWord > 0) {
      //newTestFunction();
    }
}, [splitGuessedWord]);


  return (
    <button /* onClick={() => console.log("This is the letter value " + props.letter)} */className={LetterBtnStyles.btn}>
      {props.letter}
    </button>
  );
}

export default LetterBtn;