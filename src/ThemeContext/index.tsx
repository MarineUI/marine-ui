import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Props } from './interface';

const ThemeContext: React.FC<Props> = ({ children, theme }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeContext;
