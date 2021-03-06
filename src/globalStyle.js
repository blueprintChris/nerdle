import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    min-height: 100%;
    height: 100%;
    width: 100%;
    min-width: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({ theme }) => theme.background} url('public/images/bkg.png') 0 0;
    font-size: 16px;
    line-height: 1.5;
    font-family: Monaco, 'Bitstream Vera Sans Mono', 'Lucida Console', Terminal, monospace;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;
