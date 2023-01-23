import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import MyButton from '..';

describe('Button', () => {
  test('Render default Button', () => {
    render(<MyButton>Hello World</MyButton>);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Hello World');
    expect(screen.getByRole('button')).toBeEnabled();
    cleanup();
  });

  test('Render Enabled Button', () => {
    const variant = ['filled', 'outlined', 'text'];
    variant.forEach((v) => {
      render(
        <MyButton variant={v as any} color="primary">
          Hello World
        </MyButton>
      );
      expect(screen.getByRole('button')).toBeInTheDocument();
      expect(screen.getByRole('button')).toHaveTextContent('Hello World');
      expect(screen.getByRole('button')).toBeEnabled();
      cleanup();
    });
  });

  test('Render Disabled Button', () => {
    const variant = ['filled', 'outlined', 'text'];
    variant.forEach((v) => {
      render(
        <MyButton variant={v as any} disabled>
          Hello World
        </MyButton>
      );
      expect(screen.getByRole('button')).toBeInTheDocument();
      expect(screen.getByRole('button')).toHaveTextContent('Hello World');
      expect(screen.getByRole('button')).toBeDisabled();
      cleanup();
    });
  });
});
