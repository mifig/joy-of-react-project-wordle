import React from 'react';
import Button from '../Button/Button';

function Banner({answer, result, restartHandler}) {
  return (
    <>
      {result.won === true && 
        <div className="happy banner">
          <p style={{marginBottom: "0.5rem"}}>
            <strong>Congratulations!</strong> Got it in <strong>{result.guesses} guesses</strong>.
          </p>
          <Button restartHandler={restartHandler}/>
        </div>
      }

      {result.won === false && 
        <div className="sad banner">
          <p style={{marginBottom: "0.5rem"}}>Sorry, the correct answer is <strong>{answer}</strong>.</p>
          <Button restartHandler={restartHandler}/>
        </div>
      }
    </>
  )
}

export default Banner;
