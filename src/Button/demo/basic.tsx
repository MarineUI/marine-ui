import { MyButton } from 'rcc-test';
import React from 'react';

export default function BasicButtonDemo() {
  return (
    <>
      <div>
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
      <div>
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
    </>
  );
}
