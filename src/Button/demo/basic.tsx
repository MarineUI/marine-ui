import { MyButton } from 'rcc-test';
import React from 'react';

export default function BasicButtonDemo() {
  return (
    <>
      <MyButton type="primary">按钮</MyButton>
      <MyButton type="secondary">按钮</MyButton>
      <MyButton type="warning">按钮</MyButton>
      <MyButton type="success">按钮</MyButton>
    </>
  );
}
