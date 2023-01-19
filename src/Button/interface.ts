import { ReactElement } from 'react';

export interface ButtonProps {
  color?: 'primary' | 'secondary' | 'tertiary';
  variant?: 'text' | 'filled' | 'outlined';
  size?: string;
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
