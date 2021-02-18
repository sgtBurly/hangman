import React from 'react'
import LetterBtnStyles from '../styles/LetterBtnStyles.module.css';

const LetterBtn = (props) => {
  return (
    <button className={LetterBtnStyles.btn}>
      {props.letter}
    </button>
  );
}

export default LetterBtn;