import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../themes';
import Game from '../Game/Game';
import Header from '../Header/Header';
import { StyledApp } from './styles';
import { GlobalStyle } from '../../globalStyle';

function App() {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = e => {
    const isDark = e.target.checked;
    isDark ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <StyledApp>
        <Header handleThemeChange={handleThemeChange} />
        <Game />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
