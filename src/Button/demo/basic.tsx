import { MyButton } from 'rcc-test';
import React from 'react';

export default function BasicButtonDemo() {
  return (
    <div>
      <MyButton type="primary">按钮</MyButton>
      <MyButton type="secondary">按钮</MyButton>
      <MyButton type="warn">按钮</MyButton>
      <MyButton type="success">按钮</MyButton>
    </div>
  );
}
