import React from 'react';
import { range } from '../../utils';

function Guess({word, wordCheck}) {
  return (
    <p className="guess">
      {range(5).map((cell) => {
        return (
          <span className={`cell${wordCheck ? ` ${wordCheck[cell].status}` : ""}`}  key={cell}>
            {word ? word.guess[cell] : ""}
          </span>
        )
      })}
    </p>
  )
}

export default Guess;
