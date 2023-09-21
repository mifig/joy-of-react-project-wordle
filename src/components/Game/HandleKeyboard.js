function HandleKeyboard(keyboard, setKeyboard, guess, newWordCheck) {
  let newKeyboard = [...keyboard]

  newKeyboard = newKeyboard.map((row) => {
    return (
      row.map((key) => {
        if (guess.includes(key.letter)) {
          return { letter: key.letter, status: newWordCheck.find((wordCheck) => wordCheck.letter === key.letter ).status}
        } else {
          return { letter: key.letter, status: key.status }
        }
      })
    )
  })

  setKeyboard(newKeyboard)
}

export default HandleKeyboard