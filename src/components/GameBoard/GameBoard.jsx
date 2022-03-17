import React from 'react';
import GameRow from './GameRow/GameRow';
import { StyledGameBoard } from './styles';

const GameBoard = props => {
  const { gameMatrix } = props;

  return (
    <StyledGameBoard>
      {gameMatrix.map((row, rowIndex) => (
        <GameRow key={rowIndex} row={row} rowIndex={rowIndex} />
      ))}
    </StyledGameBoard>
  );
};

export default GameBoard;
