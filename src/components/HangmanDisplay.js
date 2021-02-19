import styles from '../styles/HangmanDisplay.module.css'
import { HangmanContext } from '../context/HangmanContext'
import { useContext } from 'react'

const HangmanDisplay = () => {
  return (
    <div className={styles.hangmanDisplay}>
      <div className={`${styles.hangmanContainer}`}>
        <div className={styles.foundation}></div>
        <div className={styles.verticalPole}></div>
        <div className={styles.horizontalPole}></div>
        <div className={styles.diagonal}></div>
        <div className={styles.rope}></div>
        <div className={styles.head}></div>
        <div className={styles.body}></div>
        <div className={styles.arms}></div>
        <div className={styles.legLeft}></div>
        <div className={styles.legRight}></div>
      </div>
    </div>
  );
}

export default HangmanDisplay;