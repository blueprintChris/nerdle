import styled from 'styled-components';
import { TileStates } from '../../helpers/consts';

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
  background-color: ${({ state, theme }) => {
    switch (state) {
      case TileStates.DEFAULT:
        return theme.keyboard.background.default;
      case TileStates.INCORRECT:
        return theme.keyboard.background.absent;
      case TileStates.WRONG_PLACE:
        return theme.keyboard.background.present;
      case TileStates.CORRECT:
        return theme.keyboard.background.correct;
      default:
        return theme.keyboard.background.default;
    }
  }};

  &:hover {
    background-color: ${({ theme }) => theme.keyboard.hover.background};
  }

  &:active {
    background-color: ${({ theme }) => theme.keyboard.active.background};
    box-shadow: ${({ theme }) => theme.keyboard.active.boxShadow};
  }

  &:disabled {
    cursor: default;

    &:hover {
      background-color: ${({ theme }) => theme.keyboard.disabled.hover.background};
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
