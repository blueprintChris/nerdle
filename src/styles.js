import styled from 'styled-components';

export const GameGridWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export const GameGrid = styled.div`
  border: 1px solid var(--color-lime);
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 5px;
  padding: 10px;
  box-sizing: border-box;
`;

export const GameRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
`;

export const GameTile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 62px;
  width: 62px;
  background-color: rgba(58, 58, 60, 0);
  border: 2px solid #3a3a3c;
  font-size: 32px;
  font-weight: bold;
`;

export const KeyboardWrapper = styled.div`
  color: black;
  width: 80%;
  background-color: rgba(0, 0, 0, 0);
`;
