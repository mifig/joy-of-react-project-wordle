import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import Guesses from '../Guesses/Guesses';
import Banner from '../Banner/Banner';
import Keyboard from '../Keyboard/Keyboard';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { KEYBOARD } from '../../constants';
import HandleWord from './HandleWord';
import HandleWordChecks from "./HandleWordChecks";
import HandleKeyboard from './HandleKeyboard';

function Game() {
  const [words, setWords] = React.useState([])
  const [wordChecks, setWordChecks] = React.useState([])
  const [result, setResult] = React.useState({ won: null, guesses: null })
  const [keyboard, setKeyboard] = React.useState([...KEYBOARD])
  const [answer, setAnswer] = React.useState(sample(WORDS))

  function handleGuess(guess) {
    HandleWord(guess, words, setWords, answer, setResult)
    const newWordCheck = HandleWordChecks(guess, answer, wordChecks, setWordChecks)
    HandleKeyboard(keyboard, setKeyboard, guess, newWordCheck)
  }

  function restartHandler() {
    setWords([])
    setWordChecks([])
    setResult({ won: null, guesses: null })
    setKeyboard([...KEYBOARD])
    setAnswer(sample(WORDS))
  }

  return <>
    <Guesses words={words} answer={answer} wordChecks={wordChecks} />
    <SearchForm handleGuess={handleGuess} result={result} />
    <Banner answer={answer} result={result} restartHandler={restartHandler} />
    <Keyboard keyboard={keyboard} wordChecks={wordChecks} />
  </>;
}

export default Game;
