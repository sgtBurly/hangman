import React, { useContext, useEffect, useState } from 'react'
import LetterBtnStyles from '../styles/LetterBtnStyles.module.css';
import { HangmanContext } from '../context/HangmanContext';


const LetterBtn = (props) => {

  const [hideButton, setHideButton] = useState(true);
  const { getLetter } = useContext(HangmanContext);

  const hideButtonFunction = () => {
    setHideButton(false);
  }
  //setHideButton(false);
  console.log("This is the initial state of hidebutton " + hideButton)
  return (
    <div className={LetterBtnStyles.main_wrapper}>
    {
      hideButton ? <button className={LetterBtnStyles.btn} onClick={() => {getLetter(props.letter); hideButtonFunction()}} >
      {props.letter}
      </button> : null
    }
    </div>

  );
}

export default LetterBtn;

/* newTestFunction onClick={() => console.log("This is the letter value " + props.letter)} */