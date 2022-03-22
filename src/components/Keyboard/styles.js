import styled from 'styled-components';
import { TileStates } from '../../reducers/gameReducer';

export const StyledKeyboard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 530px;
`;

export const Key = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-family: Monaco, 'Bitstream Vera Sans Mono', 'Lucida Console', Terminal, monospace;
  font-size: 20px;
  margin: 0 6px 0 0;
  height: 58px;
  border-radius: 4px;
  border: none;
  color: #ffffff;
  cursor: pointer;
  background-color: ${props => {
    switch (props.state) {
      case TileStates.DEFAULT:
        return '#818384';
      case TileStates.INCORRECT:
        return 'rgba(58, 58, 60, 1)';
      case TileStates.WRONG_PLACE:
        return 'rgba(232, 205, 83, 0.8)';
      case TileStates.CORRECT:
        return 'rgba(187, 232, 83, 0.8)';
      default:
        return 'rgba(58, 58, 60, 0)';
    }
  }};

  &:hover {
    background-color: #999999;
  }

  &:active {
    background-color: #555555;
    box-shadow: 1px 0px 93px -43px rgba(0, 0, 0, 1) inset;
  }

  &:disabled {
    cursor: default;

    &:hover {
      background-color: rgba(58, 58, 60, 1);
    }
  }
`;

export const KeyRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
  width: 100%;

  ${Key} {
    &:last-child {
      margin: 0;
    }
  }

  &:nth-child(2) {
    &:before {
      content: '';
      flex: 0.5;
    }
    &:after {
      content: '';
      flex: 0.5;
    }
  }

  &:nth-child(3) {
    ${Key} {
      &:first-child,
      &:last-child {
        flex: 1.5;
      }

      &:last-child {
        background-color: rgba(255, 0, 0, 0.8);
      }
    }
  }
`;
