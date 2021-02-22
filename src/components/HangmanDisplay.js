import styles from '../styles/HangmanDisplay.module.css'
import { HangmanContext } from '../context/HangmanContext'
import { useContext, useState } from 'react'

const HangmanDisplay = () => {

  const { lives } = useContext(HangmanContext);
  // Uses 'dummy' variable instead, will use lives from Context later
  //const [numberOfGuessesLeft, setNumberOfGuessesLeft] = useState(0);

  return (
    <div className={styles.hangmanDisplay}>
      {lives !== null &&
      <div className={styles.hangmanContainer}>
        <div className={`${styles.foundation} ${lives < 10 ? '' : styles.hidden}`}></div>
        <div className={`${styles.verticalPole} ${lives < 9 ? '' : styles.hidden}`}></div>
        <div className={`${styles.horizontalPole} ${lives < 8 ? '' : styles.hidden}`}></div>
        <div className={`${styles.diagonal} ${lives < 7 ? '' : styles.hidden}`}></div>
        <div className={`${styles.rope} ${lives < 6 ? '' : styles.hidden}`}></div>
        <div className={`${styles.head} ${lives < 5 ? '' : styles.hidden}`}></div>
        <div className={`${styles.body} ${lives < 4 ? '' : styles.hidden}`}></div>
        <div className={`${styles.arms} ${lives < 3 ? '' : styles.hidden}`}></div>
        <div className={`${styles.legLeft} ${lives < 2 ? '' : styles.hidden}`}></div>
        <div className={`${styles.legRight} ${lives < 1 ? '' : styles.hidden}`}></div>
      </div>}
    </div>
  );
}

export default HangmanDisplay;