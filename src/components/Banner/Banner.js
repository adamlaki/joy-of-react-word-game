import React from "react";

function Banner({ type = 'win', answer, handleReset }) {
  if (type === 'win') {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          {' '}
          <strong>3 guesses</strong>.
        </p>
        <button className="reset-game" onClick={e => handleReset()}>Restart Game</button>
      </div>
    );
  } else if (type === 'lose') {
    return (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        <button className="reset-game" onClick={e => handleReset()}>Restart Game</button>
      </div>
    );
  }
}

export default Banner;
