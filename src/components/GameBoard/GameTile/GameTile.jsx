import React from 'react';
import { StyledGameTile } from './styles';

const GameTile = props => {
  const { tile, tileIndex, rowIndex } = props;

  return (
    <StyledGameTile key={tileIndex} id={`guess-tile-${rowIndex}-${tileIndex}`} state={tile.state} isFlipped={tile.isFlipped}>
      {tile.letter}
    </StyledGameTile>
  );
};

export default GameTile;
