import styled from 'styled-components';

export const StyledKeyboard = styled.div`
  width: 510px;
  display: flex;
  flex-wrap: wrap;
`;

export const Key = styled.button`
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
    width: 68px;
  }
`;
