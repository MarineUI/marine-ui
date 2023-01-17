import { ReactElement } from 'react';

export interface ButtonProps {
  type?: string;
  size?: string;
  color?: string;
  children?: ReactElement | null | string;
}

export interface sizeProps {
  [paddingL: string]: string;
  paddingH: string;
  fontSize: string;
}
