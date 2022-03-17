import styled, { keyframes, css } from 'styled-components';
import { TileStates } from '../../../reducers/gameReducer';

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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 62px;
  width: 62px;
  background-color: ${props => {
    switch (props.state) {
      case TileStates.DEFAULT:
        return 'rgba(58, 58, 60, 0)';
      case TileStates.INCORRECT:
        return 'rgba(58, 58, 60, 1)';
      case TileStates.WRONG_PLACE:
        return 'orange';
      case TileStates.CORRECT:
        return 'green';
      default:
        return 'rgba(58, 58, 60, 0)';
    }
  }};
  border: 2px solid #3a3a3c;
  font-size: 32px;
  font-weight: bold;
  animation: ${props => (props.isFlipped ? css`0.5s linear ${flipping}` : '0')};
`;
