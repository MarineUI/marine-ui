import { ReactElement } from 'react';

export interface ButtonProps {
  type?: string;
  size?: string;
  color?: string;
  children?: ReactElement | null | string;
}

export interface sizeProps {
  [index: string]: {
    [index: string]: string;
    buttonWidth: string;
    fontSize: string;
    buttonHeight: string;
  };
}
