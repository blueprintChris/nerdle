import { Actions } from './Actions';

export const TileStates = {
  DEFAULT: 'DEFAULT',
  INCORRECT: 'INCORRECT',
  WRONG_PLACE: 'WRONG_PLACE',
  CORRECT: 'CORRECT',
};

export const initialState = {
  currentGuess: '',
  currentRow: 0,
  currentTile: 0,
  submittedGuess: '',
  nerdle: '',
  gameMatrix: [
    [
      { letter: '', state: TileStates.DEFAULT, isFlipped: false },
      { letter: '', state: TileStates.DEFAULT, isFlipped: false },
      { letter: '', state: TileStates.DEFAULT, isFlipped: false },
      { letter: '', state: TileStates.DEFAULT, isFlipped: false },
      { letter: '', state: TileStates.DEFAULT, isFlipped: false },
    ],
    [
      { letter: '', state: TileStates.DEFAULT, isFlipped: false },
      { letter: '', state: TileStates.DEFAULT, isFlipped: false },
      { letter: '', state: TileStates.DEFAULT, isFlipped: false },
      { letter: '', state: TileStates.DEFAULT, isFlipped: false },
      { letter: '', state: TileStates.DEFAULT, isFlipped: false },
    ],
    [
      { letter: '', state: TileStates.DEFAULT, isFlipped: false },
      { letter: '', state: TileStates.DEFAULT, isFlipped: false },
      { letter: '', state: TileStates.DEFAULT, isFlipped: false },
      { letter: '', state: TileStates.DEFAULT, isFlipped: false },
      { letter: '', state: TileStates.DEFAULT, isFlipped: false },
    ],
    [
      { letter: '', state: TileStates.DEFAULT, isFlipped: false },
      { letter: '', state: TileStates.DEFAULT, isFlipped: false },
      { letter: '', state: TileStates.DEFAULT, isFlipped: false },
      { letter: '', state: TileStates.DEFAULT, isFlipped: false },
      { letter: '', state: TileStates.DEFAULT, isFlipped: false },
    ],
    [
      { letter: '', state: TileStates.DEFAULT, isFlipped: false },
      { letter: '', state: TileStates.DEFAULT, isFlipped: false },
      { letter: '', state: TileStates.DEFAULT, isFlipped: false },
      { letter: '', state: TileStates.DEFAULT, isFlipped: false },
      { letter: '', state: TileStates.DEFAULT, isFlipped: false },
    ],
    [
      { letter: '', state: TileStates.DEFAULT, isFlipped: false },
      { letter: '', state: TileStates.DEFAULT, isFlipped: false },
      { letter: '', state: TileStates.DEFAULT, isFlipped: false },
      { letter: '', state: TileStates.DEFAULT, isFlipped: false },
      { letter: '', state: TileStates.DEFAULT, isFlipped: false },
    ],
  ],
  keyboardMatrix: [
    [
      { letter: 'Q', state: TileStates.DEFAULT },
      { letter: 'W', state: TileStates.DEFAULT },
      { letter: 'E', state: TileStates.DEFAULT },
      { letter: 'R', state: TileStates.DEFAULT },
      { letter: 'T', state: TileStates.DEFAULT },
      { letter: 'Y', state: TileStates.DEFAULT },
      { letter: 'U', state: TileStates.DEFAULT },
      { letter: 'I', state: TileStates.DEFAULT },
      { letter: 'O', state: TileStates.DEFAULT },
      { letter: 'P', state: TileStates.DEFAULT },
    ],
    [
      { letter: 'A', state: TileStates.DEFAULT },
      { letter: 'S', state: TileStates.DEFAULT },
      { letter: 'D', state: TileStates.DEFAULT },
      { letter: 'F', state: TileStates.DEFAULT },
      { letter: 'G', state: TileStates.DEFAULT },
      { letter: 'H', state: TileStates.DEFAULT },
      { letter: 'J', state: TileStates.DEFAULT },
      { letter: 'K', state: TileStates.DEFAULT },
      { letter: 'L', state: TileStates.DEFAULT },
    ],
    [
      { letter: 'ENTER', state: TileStates.DEFAULT },
      { letter: 'Z', state: TileStates.DEFAULT },
      { letter: 'X', state: TileStates.DEFAULT },
      { letter: 'C', state: TileStates.DEFAULT },
      { letter: 'V', state: TileStates.DEFAULT },
      { letter: 'B', state: TileStates.DEFAULT },
      { letter: 'N', state: TileStates.DEFAULT },
      { letter: 'M', state: TileStates.DEFAULT },
      { letter: '<<', state: TileStates.DEFAULT },
    ],
  ],
};

export const gameReducer = (state, action) => {
  switch (action.type) {
    case Actions.START:
      return {
        ...initialState,
        nerdle: action.payload.nerdle,
      };

    case Actions.SUBMIT_GUESS:
      return {
        ...state,
        currentTile: 0,
        currentRow: state.currentRow + 1,
      };

    case Actions.ADD_LETTER:
      return {
        ...state,
        gameMatrix: action.payload.currentGameMatrix,
        currentTile: state.currentTile + 1,
      };

    case Actions.REMOVE_LETTER:
      return {
        ...state,
        gameMatrix: action.payload.currentGameMatrix,
        currentTile: state.currentTile - 1,
      };

    case Actions.FLIP_TILE:
      return {
        ...state,
        gameMatrix: action.payload.currentGameMatrix,
      };

    case Actions.UPDATE_KEY_COLOR:
      return {
        ...state,
        keyboardMatrix: action.payload.currentKeyboardMatrix,
      };
    default:
      break;
  }
};
