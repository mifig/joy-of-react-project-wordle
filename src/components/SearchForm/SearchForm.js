import React from 'react';

function SearchForm({handleGuess, result}) {
  const [guess, setGuess] = React.useState("")

  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault()
        handleGuess(guess)
        setGuess("")
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input"
        pattern="[a-zA-Z]{5}"
        maxLength={5}
        title="5 letter word please"
        type="text"
        value={guess}
        disabled={result.won === true || result.won === false}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  )
}

export default SearchForm;
