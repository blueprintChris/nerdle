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
    default:
      break;
  }
};
