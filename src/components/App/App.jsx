import { useEffect, useReducer, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../themes';
import { Actions } from '../../reducers/Actions';
import { gameReducer } from '../../reducers/gameReducer';
import { initialState } from '../../reducers/initialState';
import { TileStates } from '../../helpers/consts';
import GameBoard from '../GameBoard/GameBoard';
import Header from '../Header/Header';
import Keyboard from '../Keyboard/Keyboard';
import { GameGridWrapper, GameWrapper, KeyboardWrapper, StyledApp } from './styles';
import { GlobalStyle } from '../../globalStyle';

function App() {
  const [{ currentRow, currentTile, gameMatrix, keyboardMatrix, nerdle }, dispatch] = useReducer(gameReducer, initialState);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [flipSpeed] = useState(500);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    dispatch({ type: Actions.START, payload: { nerdle: 'MARIO' } });
  }, []);

  const handleThemeChange = e => {
    const isDark = e.target.checked;
    isDark ? setTheme('dark') : setTheme('light');
  };

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
        setIsGameOver(true);
        setIsWin(true);
      } else if (currentRow >= 5) {
        setIsGameOver(true);
        setIsWin(false);
      }

      dispatch({ type: Actions.SUBMIT_GUESS });
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
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <StyledApp>
        <Header handleThemeChange={handleThemeChange} />
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
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
