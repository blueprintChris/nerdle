import React from 'react';
import { HeaderWrapper, Spacer, StyledHeader, ThemeSwapper } from './styles';

const Header = props => {
  const { handleThemeChange } = props;

  return (
    <HeaderWrapper>
      <Spacer />
      <StyledHeader>./Nerdle</StyledHeader>
      <ThemeSwapper type='checkbox' onChange={handleThemeChange} />
    </HeaderWrapper>
  );
};

export default Header;
