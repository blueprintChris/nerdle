import React from 'react';
import GameTile from '../GameTile/GameTile';
import { StyledGameRow } from './styles';

const GameRow = props => {
  const { row, rowIndex } = props;

  return (
    <StyledGameRow key={rowIndex} id={`guess-row-${rowIndex}`}>
      {row.map((tile, tileIndex) => (
        <GameTile key={tileIndex} tile={tile} tileIndex={tileIndex} rowIndex={rowIndex}>
          {tile}
        </GameTile>
      ))}
    </StyledGameRow>
  );
};

export default GameRow;
