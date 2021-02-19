import React from 'react'
import LetterBtnStyles from '../styles/LetterBtnStyles.module.css';

const LetterBtn = (props) => {
  return (
    <button onClick={() => console.log("This is the letter value " + props.letter)} className={LetterBtnStyles.btn}>
      {props.letter}
    </button>
  );
}

export default LetterBtn;