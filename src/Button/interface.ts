import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'tertiary';
  variant?: 'text' | 'filled' | 'outlined';
}

export type Theme = 'light' | 'dark';
