import React from 'react';
import AlphabetWrapper from './AlphabetWrapper'

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
      <AlphabetWrapper />
    </div>
  );
}

export default Home;