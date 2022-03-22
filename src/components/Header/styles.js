import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #121212;
  height: 60px;
  margin-bottom: 2rem;
`;

export const StyledHeader = styled.h1`
  font-size: 30px;
  line-height: 1.5;
  font-weight: bold;
  font-family: Monaco, 'Bitstream Vera Sans Mono', 'Lucida Console', Terminal, monospace;
  color: #b5e853;
  text-shadow: 0 1px 1px rgb(0 0 0 / 10%), 0 0 5px rgb(181 232 83 / 10%), 0 0 10px rgb(181 232 83 / 10%);
  -webkit-font-smoothing: antialiased;
`;
