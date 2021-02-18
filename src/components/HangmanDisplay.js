import styles from '../styles/HangmanDisplay.module.css'

const HangmanDisplay = () => {
  return (
    <div className={styles.hangmanDisplay}>
      <p>Hangman</p>
      <div className={`${styles.hangmanContainer}`}>
        <div className={styles.foundation}></div>

      </div>
    </div>
  );
}

export default HangmanDisplay;