import React from 'react';
import AlphabetWrapper from '../components/AlphabetWrapper'
import styles from '../styles/home.module.css'


const Home = () => {
  return (
    <div className="Home">
      <section className={styles.pageHeader}>
        <h1>Welcome to Hangman</h1>
        <h3>The worlds most famous word game!</h3>
      </section>
      <AlphabetWrapper />
    </div>
  );
}

export default Home;