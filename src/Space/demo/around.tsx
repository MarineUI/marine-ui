import { MyButton, Space } from 'marine-ui';
import React from 'react';

export default function index1() {
  return (
    <Space size={['small', 'large']} wrap>
      {new Array(30).fill('').map((item, index) => {
        return (
          <MyButton key={index} color="primary" variant="filled" size="large">
            按钮{index + 1}
          </MyButton>
        );
      })}
    </Space>
  );
}
