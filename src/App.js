import { useReducer } from 'react';
import './App.css';
import Keyboard from './components/Keyboard';
import { Actions } from './reducers/Actions';
import { GameGrid, GameGridWrapper, GameRow, GameTile, KeyboardWrapper } from './styles';
import { gameReducer, initialState } from './reducers/gameReducer';

function App() {
  const worldle = 'SUPER';
  const [{ currentRow, currentTile, currentGuess, submittedGuess, gameMatrix }, dispatch] = useReducer(gameReducer, initialState);

  const handleKeyDown = button => {
    if (button === '{enter}') {
      if (currentGuess.length === 5) {
        dispatch({ type: Actions.SUBMIT_GUESS, payload: { currentGuess } });
      } else {
        console.log('current guess must be 5 letters');
      }
    }
  };

  const handleClick = key => {
    if (key === '<<') {
      removeLetter();
    } else if (key === 'ENTER') {
      checkRow();
    } else {
      addLetter(key);
    }
  };

  const checkRow = () => {};

  const removeLetter = () => {
    if (currentTile > 0 && currentTile <= 5) {
      const currentGameMatrix = [...gameMatrix];
      currentGameMatrix[currentRow][currentTile - 1] = '';

      dispatch({ type: Actions.REMOVE_LETTER, payload: { currentGameMatrix } });
    }
  };
  const addLetter = key => {
    if (currentTile < 5) {
      const currentGameMatrix = [...gameMatrix];
      currentGameMatrix[currentRow][currentTile] = key;

      dispatch({ type: Actions.ADD_LETTER, payload: { currentGameMatrix } });
    }
  };

  return (
    <div className='App'>
      <h1>./Nerdle</h1>
      <GameGridWrapper>
        <GameGrid>
          {gameMatrix.map((row, rowIndex) => (
            <GameRow key={rowIndex} id={`guess-row-${rowIndex}`}>
              {row.map((tile, tileIndex) => (
                <GameTile key={tileIndex} id={`guess-tile-${rowIndex}-${tileIndex}`}>
                  {tile}
                </GameTile>
              ))}
            </GameRow>
          ))}
        </GameGrid>
      </GameGridWrapper>
      <KeyboardWrapper>
        <Keyboard handleClick={handleClick} />
      </KeyboardWrapper>
    </div>
  );
}

export default App;
