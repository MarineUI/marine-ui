import { MyButton } from 'marine-ui';
import React from 'react';
import { ThemeProvider } from 'styled-components';

const flexStyle = {
  display: 'flex',
  gap: '20px',
};

export default function BasicButtonDemo() {
  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <div style={flexStyle}>
        <MyButton color="primary" variant="filled">
          按钮
        </MyButton>
        <MyButton color="secondary" variant="filled">
          按钮
        </MyButton>
        <MyButton color="tertiary" variant="filled">
          按钮
        </MyButton>
      </div>
      <br />
      <div style={flexStyle}>
        <MyButton color="primary" variant="filled">
          Filled
        </MyButton>
        <MyButton color="primary" variant="outlined">
          Outlined
        </MyButton>
        <MyButton color="primary" variant="text">
          Text
        </MyButton>
      </div>
      <br />
      <div style={flexStyle}>
        <MyButton color="primary" variant="filled" disabled>
          按钮
        </MyButton>
        <MyButton color="secondary" variant="outlined" disabled>
          按钮
        </MyButton>
        <MyButton color="tertiary" variant="text" disabled>
          按钮
        </MyButton>
      </div>
    </ThemeProvider>
  );
}
