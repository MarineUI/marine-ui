import React from 'react';
import GlobalStyle from '../GlobalStyle';
import Typography from '../Typography';
import { ButtonProps } from './interface';
import { ButtonStyle } from './style';

const MyButton = (props: ButtonProps) => {
  const { children } = props;
  return (
    <>
      <GlobalStyle />
      <ButtonStyle props={props} {...props}>
        <Typography variant="label-large">{children as string}</Typography>
      </ButtonStyle>
    </>
  );
};

export default MyButton;
