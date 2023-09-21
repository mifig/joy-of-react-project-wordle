import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function HandleWord(guess, words, setWords, answer, setResult) {
  const newWord = {guess, id: Math.random()}
  const newWords = [...words, newWord]
  setWords(newWords)

  // Set result:
  if (guess === answer) {
    setResult({won: true, guesses: newWords.length})
  } else if (newWords.length >= NUM_OF_GUESSES_ALLOWED) {
    setResult({won: false, guesses: newWords.length})
  }
}

export default HandleWord