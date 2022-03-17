import styled from 'styled-components';

export const StyledKeyboard = styled.div`
  width: 530px;
  display: flex;
  flex-wrap: wrap;
`;

export const Key = styled.button`
  font-family: Monaco, 'Bitstream Vera Sans Mono', 'Lucida Console', Terminal, monospace;
  display: flex;
  padding: 1rem;
  overflow: hidden;
  font-size: 20px;
  width: 43px;
  height: 58px;
  border-radius: 4px;
  border: none;
  background-color: #818384;
  color: #ffffff;
  margin: 4px;
  cursor: pointer;

  &:nth-child(11) {
    margin-left: 30px;
  }

  &:nth-child(20),
  &:nth-child(28) {
    min-width: 68px;
    width: fit-content;
  }
`;
