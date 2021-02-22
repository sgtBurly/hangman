import React, { useContext } from 'react';
import HangmanDisplay from '../components/HangmanDisplay';
import AlphabetWrapper from '../components/AlphabetWrapper';
import LivesWrapper from '../components/LivesWrapper';
import styles from '../styles/home.module.css';
import StartGame from '../components/StartGame';
import WordOutput from '../components/WordOutput';
import { HangmanContext } from '../context/HangmanContext'

const Home = () => {
  const { game } = useContext(HangmanContext);

  return (
    <div className="Home">
      <div className={styles.headerWrapper}>
        <section className={styles.pageHeader}>
          <h1>Welcome to Hangman</h1>
          <h3>The worlds most famous word game!</h3>
        </section>
      <div className={styles.logo}></div>
      </div>
      <div className={styles.componentsContainer}>
        {!game && <StartGame />}
        {game && <AlphabetWrapper />}
        {game && <WordOutput />}
        {game && <HangmanDisplay />}
        {game && <LivesWrapper />}
      </div>
    </div>
  );
}

export default Home;