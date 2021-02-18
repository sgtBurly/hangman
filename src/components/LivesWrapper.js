import React from 'react'
import LivesWrapperStyles from '../styles/LivesWrapperStyles.module.css'

const LivesWrapper = () => {
  return (
    <div className={LivesWrapperStyles.main_wrapper}>
      <h3>You have <span className={LivesWrapperStyles.span}>10</span> lives left before you get hanged!</h3>
    </div>
  );
}

export default LivesWrapper;