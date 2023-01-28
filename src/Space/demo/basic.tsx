import { MyButton, Space } from 'marine-ui';
import React from 'react';

export default function index1() {
  return (
    <Space>
      <MyButton color="primary" variant="filled">
        按钮1
      </MyButton>
      <MyButton color="primary" variant="filled">
        按钮2
      </MyButton>
      <MyButton color="primary" variant="filled">
        按钮3
      </MyButton>
    </Space>
  );
}
