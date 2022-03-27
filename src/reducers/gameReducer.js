import { Actions } from './Actions';
import { initialState } from './initialState';

export const gameReducer = (state, action) => {
  switch (action.type) {
    case Actions.START:
      return {
        ...initialState,
        nerdle: action.payload.nerdle,
      };

    case Actions.GO_NEXT_ROW:
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

    case Actions.GAME_OVER_WIN:
      return {
        ...state,
        isGameOver: true,
        isWin: true,
      };

    case Actions.GAME_OVER_LOSS:
      return {
        ...state,
        isGameOver: true,
        isWin: false,
      };

    default:
      break;
  }
};
