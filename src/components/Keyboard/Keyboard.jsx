import React from 'react';
import { TileStates } from '../../reducers/gameReducer';
import { Key, KeyRow, StyledKeyboard } from './styles';

const Keyboard = props => {
  const { handleClick, keyboardMatrix } = props;

  return (
    <StyledKeyboard>
      {keyboardMatrix.map((keyRow, index) => (
        <KeyRow key={index}>
          {keyRow.map(key => (
            <Key
              key={key.letter}
              id={`button-${key.letter}`}
              onClick={() => handleClick(key.letter)}
              state={key.state}
              disabled={key.state === TileStates.INCORRECT}
            >
              {key.letter}
            </Key>
          ))}
        </KeyRow>
      ))}
    </StyledKeyboard>
  );
};

export default Keyboard;
