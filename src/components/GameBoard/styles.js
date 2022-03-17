import styled from 'styled-components';

export const StyledGameBoard = styled.div`
  border: 1px solid var(--color-lime);
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 5px;
  padding: 10px;
  box-sizing: border-box;
`;
