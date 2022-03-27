import styled, { keyframes, css } from 'styled-components';
import { TileStates } from '../../../helpers/consts';

const flipping = keyframes`
  0% {
    transform: rotateX(0deg);
  }

  50% {
    transform: rotateX(90deg);
  }

  100% {
    transform: rotateX(0deg);
  }
`;

export const StyledGameTile = styled.div`
  -webkit-text-stroke: ${({ state }) => (state === TileStates.CORRECT || state === TileStates.WRONG_PLACE ? '1px black' : '0 black')};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 58px;
  width: 58px;
  border: 2px solid ${({ theme }) => theme.gameBoard.tile.border};
  font-size: 4rem;
  font-weight: bold;
  color: ${({ isFlipped, theme }) => (isFlipped ? theme.gameBoard.tile.font.color.flipped : theme.gameBoard.tile.font.color.default)};
  animation: ${({ isFlipped }) => (isFlipped ? css`0.5s ease-in ${flipping}` : '0')};
  background-color: ${({ state, theme }) => {
    switch (state) {
      case TileStates.DEFAULT:
        return theme.gameBoard.tile.background.default;
      case TileStates.INCORRECT:
        return theme.gameBoard.tile.background.absent;
      case TileStates.WRONG_PLACE:
        return theme.gameBoard.tile.background.present;
      case TileStates.CORRECT:
        return theme.gameBoard.tile.background.correct;
      default:
        return theme.gameBoard.tile.background.default;
    }
  }};
`;
