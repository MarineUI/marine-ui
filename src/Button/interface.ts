import { ReactElement } from 'react';

export interface ButtonProps {
  color?: 'primary' | 'secondary' | 'tertiary';
  variant?: 'text' | 'filled' | 'outlined';
  disabled?: boolean;
  children?: ReactElement | null | string;
}

export type Theme = 'light' | 'dark';
