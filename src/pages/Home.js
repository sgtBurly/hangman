import React from 'react';
import HangmanDisplay from '../components/HangmanDisplay';
import AlphabetWrapper from '../components/AlphabetWrapper';
import LivesWrapper from '../components/LivesWrapper';
import styles from '../styles/home.module.css';

const Home = () => {
  return (
    <div className="Home">
      <div className={styles.headerWrapper}>
        <section className={styles.pageHeader}>
          <h1>Welcome to Hangman</h1>
          <h3>The worlds most famous word game!</h3>
        </section>
        <div className={styles.logo}></div>
      </div>
        <AlphabetWrapper />
        <HangmanDisplay />
      <LivesWrapper />
    </div>
  );
}

export default Home;