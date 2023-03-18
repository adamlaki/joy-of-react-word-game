import React from "react";
import Keyboard from "../Keyboard";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Input({ guesses, setGuesses, won, setWon, answer, keys, setKeys }) {
  const [word, setWord] = React.useState('');

  function handleFormSubmit(e) {
    e.preventDefault();

    const wordArray = word.split('')
    const classes = checkGuess(word, answer);
    const newKeys = [...keys];

    wordArray.forEach((letter, index) => {
      const keyIndex = newKeys.findIndex((key) => key.key === letter);
      if (newKeys[keyIndex].status === 'correct') {
        return;
      }

      if (newKeys[keyIndex].status === 'misplaced' && classes[index].status === 'incorrect') {
        return;
      }

      newKeys[keyIndex].status = classes[index].status;
      setKeys(newKeys);
    });

    setGuesses([...guesses, word]);
    setWord('');

    if (word === answer) {
      setWon(true);
    }
  }

  return (<>
    <form onSubmit={handleFormSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" autoFocus value={word} onChange={(e) => setWord(e.target.value.toUpperCase())} pattern="[A-Za-z]{5}" maxLength="5" disabled={won || guesses.length === NUM_OF_GUESSES_ALLOWED} />
    </form>
    <Keyboard keys={keys} />
  </>);
}

export default Input;
