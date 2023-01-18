import React from 'react';
import { ButtonProps } from './interface';
import { ButtonStyle } from './style';

const MyButton = (props: ButtonProps) => {
  const { children } = props;
  return <ButtonStyle props={props}>{children}</ButtonStyle>;
};

export default MyButton;
