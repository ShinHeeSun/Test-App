import React, { useState } from 'react';
import Board from './Board';
import styled from 'styled-components';

let array = [];
for (let i = 1; i <= 25; i++) {
  array.push(i);
}

function OneToFifty() {
  const [numbers, setNumbers] = useState(array);
  const [gameFlag, setGameFlag] = useState(false);
  const [current, setCurrent] = useState(1);
  const [timeElapsed, setTimeElapsed] = useState(0);

  const handleClick = (num) => {
    if (num === current) {
      if (num === 50) {
        console.log('Success');
      }
      const index = numbers.index0f(num);
      setNumbers((numbers) => [
        ...numbers.slice(0, index),
        num < 26 ? num + 25 : 0,
        ...numbers.slice(index + 1),
      ]);

      const endGame = () => {
        setGameFlag(false);
      };
      setCurrent((current) => current + 1);
    }
  };

  return (
    <Container>
      <Board numbers={numbers} handleClick={handleClick} />
      {/* {gameFlag ? (
        <Timer>{timeElapsed}</Timer>
      ) : (
        <button onClick={startGame}>start</button>
      )} */}
    </Container>
  );
}

const Container = styled.div`
  whidth: 600px;
  height: 800px;
  border: 1px solid black;
`;
export default OneToFifty;
