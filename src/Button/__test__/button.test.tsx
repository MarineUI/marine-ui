import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Button from '..';

describe('Button', () => {
  test('Render the Button', () => {
    render(<Button text="Hello World" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Hello World');
  });
});
