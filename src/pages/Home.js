import React from 'react';
import HangmanDisplay from '../components/HangmanDisplay'

const Home = () => {
  return (
    <div className="Home">
      <nav className="sidebar">
        <ul>
          <li>FAQ</li>
          <li>Interested in more?</li>
          <li>Partners</li>
        </ul>
      </nav>
      <HangmanDisplay />
    </div>
  );
}

export default Home;