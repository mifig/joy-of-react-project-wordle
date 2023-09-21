import { checkGuess } from '../../game-helpers';

function HandleWordChecks(guess, answer, wordChecks, setWordChecks) {
  let newWordCheck = []
  let newWordChecks = []
  
  if (guess) {
    newWordCheck = checkGuess(guess, answer)
    newWordChecks = [...wordChecks, newWordCheck]
    setWordChecks(newWordChecks)
  }

  return newWordCheck
}

export default HandleWordChecks