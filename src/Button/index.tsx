import React from 'react';
import { ButtonProps } from './interface';
import { ButtonStyle } from './style';

const MyButton = (props: ButtonProps) => {
  const { children, disabled } = props;
  return (
    <ButtonStyle props={props} disabled={disabled}>
      {children}
    </ButtonStyle>
  );
};

export default MyButton;
