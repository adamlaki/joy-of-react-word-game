import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const guessArray = guess ? guess.split('') : ['', '', '', '', ''];
  const classes = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5).map((index) => {
        return <span className={`cell ${guessArray[index] ? classes[index].status : ''}`} key={index}>{guessArray[index]}</span>
      })}
    </p>
  );
}

export default Guess;
