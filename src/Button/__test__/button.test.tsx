import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import MyButton from '..';

describe('Button', () => {
  test('Render the Button', () => {
    render(<MyButton>Hello World</MyButton>);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Hello World');
  });
});
