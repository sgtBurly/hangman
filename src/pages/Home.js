import React from 'react';
import HangmanDisplay from '../components/HangmanDisplay'
import AlphabetWrapper from '../components/AlphabetWrapper'
import {style} from '../styles/home.module.css'


const Home = () => {
  return (
    <div className="Home">
      <section className="pageHeader">
        <h1>Welcome to Hangman</h1>
        <h3>The worlds most famous word game!</h3>
      </section>
      <AlphabetWrapper />
      <HangmanDisplay />
    </div>
  );
}

export default Home;