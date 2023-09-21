import React from 'react';
import styles from "./Keyboard.module.css";

function Keyboard({keyboard}) {  
  return (
    <div className={styles.keyboard}>
      <div className={styles["keyboard-row"]}>
        {keyboard[0].map((key) => {
          return <p className={`${styles.key} ${styles[key.status]}`} key={key.letter}>{key.letter}</p>
        })}
      </div>
      <div className={styles["keyboard-row"]}>
        {keyboard[1].map((key) => {
          return <p className={`${styles.key} ${styles[key.status]}`} key={key.letter}>{key.letter}</p>
        })}
      </div>
      <div className={styles["keyboard-row"]}>
        {keyboard[2].map((key) => {
          return <p className={`${styles.key} ${styles[key.status]}`} key={key.letter}>{key.letter}</p>
        })}
      </div>
    </div>
  )
}

export default Keyboard;
