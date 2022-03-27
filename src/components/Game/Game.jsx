import React, { useEffect, useReducer, useState } from 'react';
import { TileStates } from '../../helpers/consts';
import { Actions } from '../../reducers/Actions';
import { gameReducer } from '../../reducers/gameReducer';
import { initialState } from '../../reducers/initialState';
import GameBoard from '../GameBoard/GameBoard';
import Keyboard from '../Keyboard/Keyboard';
import { GameGridWrapper, GameWrapper, KeyboardWrapper } from './styles';

const Game = () => {
  const [{ currentRow, currentTile, gameMatrix, keyboardMatrix, nerdle, isGameOver, isWin }, dispatch] = useReducer(gameReducer, initialState);
  const [flipSpeed] = useState(500);

  useEffect(() => {
    dispatch({ type: Actions.START, payload: { nerdle: 'MARIO' } });
  }, []);

  const handleClick = key => {
    if (!isGameOver) {
      if (key === '⟵') {
        removeLetter();
      } else if (key === 'ENTER') {
        checkRow();
      } else {
        addLetter(key);
      }
    }
  };

  const checkRow = () => {
    if (currentTile > 4) {
      const currentGameMatrix = [...gameMatrix];
      const guess = currentGameMatrix[currentRow].map(tile => tile.letter).join('');

      flipTiles(currentGameMatrix);

      if (nerdle === guess) {
        dispatch({ type: Actions.GAME_OVER_WIN });
      } else if (currentRow >= 5) {
        dispatch({ type: Actions.GAME_OVER_LOSS });
      }

      dispatch({ type: Actions.GO_NEXT_ROW });
    }
  };

  const copyMatrix = matrix => matrix.map(keyRow => keyRow.map(key => ({ ...key })));

  const addColourToKey = (guess, keyMatrix) => {
    keyMatrix.forEach(keyRow => {
      const letter = keyRow.find(key => key.letter === guess.letter);
      if (letter && (letter.state === TileStates.DEFAULT || (letter.state === TileStates.WRONG_PLACE && guess.state === TileStates.CORRECT))) {
        letter.state = guess.state;
      }
    });
  };

  const flipTiles = currentGameMatrix => {
    let tempWordle = nerdle;
    const guessRow = [];
    const currentKeyboardMatrix = copyMatrix(keyboardMatrix);

    currentGameMatrix[currentRow].forEach(tile => {
      guessRow.push({ letter: tile.letter, state: TileStates.INCORRECT });
    });

    guessRow.forEach((guess, index) => {
      if (guess.letter === nerdle[index]) {
        guess.state = TileStates.CORRECT;
        addColourToKey(guess, currentKeyboardMatrix);
        tempWordle = tempWordle.replace(guess.letter, '*');
      }
    });

    guessRow.forEach(guess => {
      if (tempWordle.includes(guess.letter)) {
        guess.state = TileStates.WRONG_PLACE;
        addColourToKey(guess, currentKeyboardMatrix);
        tempWordle = tempWordle.replace(guess.letter, '*');
      }
    });

    guessRow.forEach(guess => {
      if (!tempWordle.includes(guess.letter)) {
        addColourToKey(guess, currentKeyboardMatrix);
      }
    });

    currentGameMatrix[currentRow].forEach((tile, index) => {
      setTimeout(() => {
        tile.isFlipped = true;
        tile.state = guessRow[index].state;

        dispatch({ type: Actions.FLIP_TILE, payload: { currentGameMatrix } });
      }, index * flipSpeed);
    });

    setTimeout(() => {
      dispatch({ type: Actions.UPDATE_KEY_COLOR, payload: { currentKeyboardMatrix } });
    }, (currentGameMatrix.length - 1) * flipSpeed);
  };

  const removeLetter = () => {
    if (currentTile > 0 && currentTile <= 5) {
      const currentGameMatrix = [...gameMatrix];
      currentGameMatrix[currentRow][currentTile - 1].letter = '';

      dispatch({ type: Actions.REMOVE_LETTER, payload: { currentGameMatrix } });
    }
  };

  const addLetter = key => {
    if (currentTile < 5) {
      const currentGameMatrix = [...gameMatrix];
      currentGameMatrix[currentRow][currentTile].letter = key;

      dispatch({ type: Actions.ADD_LETTER, payload: { currentGameMatrix } });
    }
  };
  return (
    <>
      <GameWrapper>
        <GameGridWrapper>
          <GameBoard gameMatrix={gameMatrix} />
        </GameGridWrapper>
        <KeyboardWrapper>
          <Keyboard handleClick={handleClick} keyboardMatrix={keyboardMatrix} />
        </KeyboardWrapper>
      </GameWrapper>
      {isGameOver && isWin && 'Excellent!'}
      {isGameOver && !isWin && 'Unlucky. Maybe next time.'}
    </>
  );
};

export default Game;
