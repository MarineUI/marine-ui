import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import Typography from '..';

describe('Typography', () => {
  test('Render the Typography', () => {
    const variant = [
      'display-large',
      'display-medium',
      'display-small',
      'headline-large',
      'headline-medium',
      'headline-small',
      'title-large',
      'title-medium',
      'title-small',
      'label-large',
      'label-medium',
      'label-small',
    ];
    variant.forEach((v) => {
      render(<Typography variant={v as any}>Hello World</Typography>);
      expect(screen.getByText('Hello World')).toBeInTheDocument();
      cleanup();
    });
  });

  test('As tag H1', () => {
    render(
      <Typography variant="display-large" tag="h1">
        Hello World
      </Typography>
    );
    expect(screen.getByText('Hello World').tagName).toBe('H1');
  });
});
