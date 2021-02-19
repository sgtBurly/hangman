import React, { useContext, useEffect, useState } from 'react'
import LetterBtnStyles from '../styles/LetterBtnStyles.module.css';
import { HangmanContext } from '../context/HangmanContext';


const LetterBtn = (props) => {

  const { splitGuessedWord, getLetter } = useContext(HangmanContext);

//   useEffect(() => {
//     if (splitGuessedWord > 0) {
//       newTestFunction();
//     }
// }, [splitGuessedWord]);


  return (
    <button className={LetterBtnStyles.btn} onClick={() => getLetter(props.letter)}>
      {props.letter}
    </button>
  );
}

export default LetterBtn;

/* newTestFunction onClick={() => console.log("This is the letter value " + props.letter)} */