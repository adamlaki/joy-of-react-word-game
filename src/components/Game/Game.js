import React from 'react';
import Guesses from '../Guesses';
import Input from '../Input';
import Banner from '../Banner';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [answer, setAndwer] = React.useState(sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [won, setWon] = React.useState(false);
  const [keys, setKeys] = React.useState([
    { key: 'Q', status: 'unused' },
    { key: 'W', status: 'unused' },
    { key: 'E', status: 'unused' },
    { key: 'R', status: 'unused' },
    { key: 'T', status: 'unused' },
    { key: 'Y', status: 'unused' },
    { key: 'U', status: 'unused' },
    { key: 'I', status: 'unused' },
    { key: 'O', status: 'unused' },
    { key: 'P', status: 'unused' },
    { key: 'A', status: 'unused' },
    { key: 'S', status: 'unused' },
    { key: 'D', status: 'unused' },
    { key: 'F', status: 'unused' },
    { key: 'G', status: 'unused' },
    { key: 'H', status: 'unused' },
    { key: 'J', status: 'unused' },
    { key: 'K', status: 'unused' },
    { key: 'L', status: 'unused' },
    { key: 'Z', status: 'unused' },
    { key: 'X', status: 'unused' },
    { key: 'C', status: 'unused' },
    { key: 'V', status: 'unused' },
    { key: 'B', status: 'unused' },
    { key: 'N', status: 'unused' },
    { key: 'M', status: 'unused' },
  ]);

  console.info({ answer });

  function handleReset() {
    setAndwer(sample(WORDS));
    setGuesses([]);
    setWon(false);
    setKeys([
      { key: 'Q', status: 'unused' },
      { key: 'W', status: 'unused' },
      { key: 'E', status: 'unused' },
      { key: 'R', status: 'unused' },
      { key: 'T', status: 'unused' },
      { key: 'Y', status: 'unused' },
      { key: 'U', status: 'unused' },
      { key: 'I', status: 'unused' },
      { key: 'O', status: 'unused' },
      { key: 'P', status: 'unused' },
      { key: 'A', status: 'unused' },
      { key: 'S', status: 'unused' },
      { key: 'D', status: 'unused' },
      { key: 'F', status: 'unused' },
      { key: 'G', status: 'unused' },
      { key: 'H', status: 'unused' },
      { key: 'J', status: 'unused' },
      { key: 'K', status: 'unused' },
      { key: 'L', status: 'unused' },
      { key: 'Z', status: 'unused' },
      { key: 'X', status: 'unused' },
      { key: 'C', status: 'unused' },
      { key: 'V', status: 'unused' },
      { key: 'B', status: 'unused' },
      { key: 'N', status: 'unused' },
      { key: 'M', status: 'unused' },
    ]);
  }

  return (<>
    <Guesses guesses={guesses} answer={answer} />
    <Input guesses={guesses} setGuesses={setGuesses} won={won} setWon={setWon} answer={answer} keys={keys} setKeys={setKeys} />
    {(won || guesses.length === NUM_OF_GUESSES_ALLOWED) && <Banner type={won ? 'win' : 'lose'} answer={answer} handleReset={handleReset} />}
  </>);
}

export default Game;
