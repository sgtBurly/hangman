import React, {useContext} from 'react'
import LivesWrapperStyles from '../styles/LivesWrapperStyles.module.css'
import {HangmanContext} from '../context/HangmanContext'

const LivesWrapper = () => {
  const {lives} = useContext(HangmanContext)
  return (
    <div className={LivesWrapperStyles.main_wrapper}>
      <h3>You have <span className={LivesWrapperStyles.span}>{lives}</span> lives left before you get hanged!</h3>
    </div>
  );
}

export default LivesWrapper;