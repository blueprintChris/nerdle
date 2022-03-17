import { useReducer, useRef, useState } from 'react';
import './App.css';
import Keyboard from 'react-simple-keyboard';
import { Actions } from './reducers/Actions';
import { GameGrid, GameGridWrapper, GameRow, GameTile, KeyboardWrapper } from './styles';
import { gameReducer, initialState } from './reducers/gameReducer';
import 'react-simple-keyboard/build/css/index.css';

const keyboardLayout = {
  alpha: ['Q W E R T Y U I O P', 'A S D F G H J K L', '{enter} Z X C V B N M {bksp}'],
};

function App() {
  const [{ currentRow, currentTile, currentGuess, submittedGuess, gameMatrix }, dispatch] = useReducer(gameReducer, initialState);
  const keyboardRef = useRef(Keyboard);

  const handleKeyDown = button => {
    if (button === '{enter}') {
      if (currentGuess.length === 5) {
        dispatch({ type: Actions.SUBMIT_GUESS, payload: { currentGuess } });

        keyboardRef.current.clearInput();
      } else {
        console.log('current guess must be 5 letters');
      }
    }
  };

  const handleChange = input => {
    if (!input) return;

    if (input.length < 6) {
      const currentGameMatrix = [...gameMatrix];
      currentGameMatrix[currentRow][currentTile] = input.charAt(currentTile);

      dispatch({ type: Actions.ADD_LETTER, payload: { currentGameMatrix, currentGuess: input } });
    }
  };

  return (
    <div className='App'>
      <h1>./Nerdle</h1>
      <GameGridWrapper>
        <GameGrid>
          {gameMatrix.map((row, index) => (
            <GameRow key={index}>
              {row.map((tile, index) => (
                <GameTile key={index}>{tile}</GameTile>
              ))}
            </GameRow>
          ))}
        </GameGrid>
      </GameGridWrapper>
      <KeyboardWrapper>
        <Keyboard
          keyboardRef={r => (keyboardRef.current = r)}
          layout={keyboardLayout}
          layoutName={'alpha'}
          onChange={handleChange}
          onKeyPress={handleKeyDown}
          baseClass='keyboard1'
        />
      </KeyboardWrapper>
    </div>
  );
}

export default App;
