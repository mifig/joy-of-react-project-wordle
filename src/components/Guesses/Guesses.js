import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import Guess from '../Guess/Guess';

function Guesses({words, wordChecks}) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((row) => {
        return <Guess key={row} word={words[row]} wordCheck={wordChecks[row]} />
      })}
    </div>
  )
}

export default Guesses;
