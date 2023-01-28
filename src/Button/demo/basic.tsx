import { MyButton } from 'marine-ui';
import React from 'react';
import ThemeContext from '../../ThemeContext';

const flexStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
};

export default function BasicButtonDemo() {
  return (
    <ThemeContext theme={{ mode: 'light' }}>
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
      <br />
      <div style={flexStyle}>
        <MyButton variant="filled" size="small">
          Button
        </MyButton>
        <MyButton variant="filled" size="medium">
          Button
        </MyButton>
        <MyButton variant="filled" size="large">
          Button
        </MyButton>
      </div>
    </ThemeContext>
  );
}
