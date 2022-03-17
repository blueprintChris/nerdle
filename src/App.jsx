import { useEffect, useReducer, useState } from 'react';
import './App.css';
import Keyboard from './components/Keyboard/Keyboard';
import { Actions } from './reducers/Actions';
import { GameGridWrapper, GameWrapper, KeyboardWrapper } from './styles';
import { gameReducer, initialState, TileStates } from './reducers/gameReducer';
import GameBoard from './components/GameBoard/GameBoard';
import Header from './components/Header/Header';

function App() {
  const [{ currentRow, currentTile, gameMatrix, nerdle }, dispatch] = useReducer(gameReducer, initialState);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWin, setIsWin] = useState(false);

  useEffect(() => {
    dispatch({ type: Actions.START, payload: { nerdle: 'HACKS' } });
  }, []);

  const handleClick = key => {
    if (!isGameOver) {
      if (key === '<<') {
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
      }

      if (currentRow >= 5) {
        setIsGameOver(true);
        setIsWin(false);
      }

      dispatch({ type: Actions.SUBMIT_GUESS, payload: { currentGuess: guess } });
    }
  };

  const flipTiles = currentGameMatrix => {
    let tempWordle = nerdle;
    const guessArray = [];

    currentGameMatrix[currentRow].forEach(tile => {
      guessArray.push({ letter: tile.letter, state: TileStates.INCORRECT });
    });

    guessArray.forEach((guess, index) => {
      if (guess.letter === nerdle[index]) {
        guess.state = TileStates.CORRECT;
        tempWordle = tempWordle.replace(guess.letter, '*');
      }
    });

    guessArray.forEach(guess => {
      if (tempWordle.includes(guess.letter)) {
        guess.state = TileStates.WRONG_PLACE;
        tempWordle = tempWordle.replace(guess.letter, '*');
      }
    });

    currentGameMatrix[currentRow].forEach((tile, index) => {
      setTimeout(() => {
        tile.isFlipped = true;
        tile.state = guessArray[index].state;

        dispatch({ type: Actions.FLIP_TILE, payload: { currentGameMatrix } });
      }, index * 500);
    });
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
    <div className='App'>
      <Header />
      <GameWrapper>
        <GameGridWrapper>
          <GameBoard gameMatrix={gameMatrix} />
        </GameGridWrapper>
        <KeyboardWrapper>
          <Keyboard handleClick={handleClick} />
        </KeyboardWrapper>
      </GameWrapper>

      {isGameOver && isWin && 'Excellent!'}
      {isGameOver && !isWin && 'Unlucky. Maybe next time.'}
    </div>
  );
}

export default App;
