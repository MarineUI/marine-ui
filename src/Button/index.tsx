import React from 'react';
import GlobalStyle from '../GlobalStyle';
import useGlobalTheme from '../hooks/useGlobalTheme';
import Typography from '../Typography';
import { ButtonProps } from './interface';
import { ButtonStyle } from './style';

const MyButton = (props: ButtonProps) => {
  const { children } = props;
  const theme = useGlobalTheme();

  return (
    <>
      <GlobalStyle />
      <ButtonStyle props={props} theme={theme} {...props}>
        <Typography variant="label-large">{children as string}</Typography>
      </ButtonStyle>
    </>
  );
};

export default MyButton;
