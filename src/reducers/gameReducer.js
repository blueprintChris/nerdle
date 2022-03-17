import { Actions } from './Actions';

export const initialState = {
  currentGuess: '',
  currentRow: 0,
  currentTile: 0,
  submittedGuess: '',
  gameMatrix: [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ],
};

export const gameReducer = (state, action) => {
  switch (action.type) {
    case Actions.SUBMIT_GUESS:
      return {
        ...state,
        currentGuess: '',
        currentTile: 0,
        currentRow: state.currentRow + 1,
        submittedGuess: action.payload.currentGuess,
      };

    case Actions.ADD_LETTER:
      return {
        ...state,
        currentGuess: action.payload.currentGuess,
        gameMatrix: action.payload.currentGameMatrix,
        currentTile: state.currentTile + 1,
      };

    default:
      break;
  }
};

// setCurrentGuess(input);
// const currentMatrix = [...gameMatrix];
// currentMatrix[currentRow][currentTile] = input.charAt(currentTile);
// setGameMatrix(currentMatrix);
// setCurrentTile(currentTile => currentTile + 1);
