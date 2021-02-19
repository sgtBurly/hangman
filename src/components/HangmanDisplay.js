import styles from '../styles/HangmanDisplay.module.css'
import { HangmanContext } from '../context/HangmanContext'
import { useContext, useState } from 'react'

const HangmanDisplay = () => {

  const { lives } = useContext(HangmanContext);
  // Uses 'dummy' variable instead, will use lives later
  const [numberOfGuessesLeft, setNumberOfGuessesLeft] = useState(10);

  return (
    <div className={styles.hangmanDisplay}>
      <div className={styles.hangmanContainer}>
        <div className={`${styles.foundation} ${styles.hidden}`}></div>
        <div className={`${styles.verticalPole} ${styles.hidden}`}></div>
        <div className={`${styles.horizontalPole} ${styles.hidden}`}></div>
        <div className={`${styles.diagonal} ${styles.hidden}`}></div>
        <div className={`${styles.rope} ${styles.hidden}`}></div>
        <div className={`${styles.head} ${styles.hidden}`}></div>
        <div className={`${styles.body} ${styles.hidden}`}></div>
        <div className={`${styles.arms} ${styles.hidden}`}></div>
        <div className={`${styles.legLeft} ${styles.hidden}`}></div>
        <div className={`${styles.legRight} ${styles.hidden}`}></div>
      </div>
    </div>
  );
}

export default HangmanDisplay;