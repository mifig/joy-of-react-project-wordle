import React from 'react';
import styles from './Button.module.css'

function button({restartHandler}) {
  return (
    <button className={styles["restart-btn"]} onClick={restartHandler}>Restart</button>
  )
}

export default button;
