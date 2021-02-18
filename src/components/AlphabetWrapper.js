import React, { useState } from 'react'
import AlphaStyles from '../styles/AlphabetWrapper.module.css';
import LetterBtn from '../components/LetterBtn';

const AlphabetWrapper = () => {
  const [ letters, setLetters] = useState(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']);
  return (
    <div className={AlphaStyles.main_wrapper}>
      <h3 className={AlphaStyles.h3}>Guess a letter</h3>
      <div>
        {
          letters.map(letter => {
            return (
              <LetterBtn letter={letter} />
            )
          })
        }
      </div>
    </div>
  );
}

export default AlphabetWrapper;