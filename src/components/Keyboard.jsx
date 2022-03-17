import React from 'react';
import { Key, StyledKeyboard } from './styles';

const Keyboard = props => {
  const { handleClick } = props;

  const keys = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'ENTER',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '<<',
  ];

  return (
    <StyledKeyboard>
      {keys.map(key => (
        <Key key={key} id={`button-${key}`} onClick={() => handleClick(key)}>
          {key}
        </Key>
      ))}
    </StyledKeyboard>
  );
};

export default Keyboard;
