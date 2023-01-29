import { MyButton, Space } from 'marine-ui';
import React from 'react';

export default function index1() {
  return (
    <>
      <Space>
        <MyButton variant="filled" size="small">
          按钮1
        </MyButton>
        <MyButton variant="filled" size="medium">
          按钮2
        </MyButton>
        <MyButton variant="filled" size="large">
          按钮3
        </MyButton>
      </Space>
      <br></br>
      <Space align="center">
        <MyButton variant="filled" size="small">
          按钮1
        </MyButton>
        <MyButton variant="filled" size="medium">
          按钮2
        </MyButton>
        <MyButton variant="filled" size="large">
          按钮3
        </MyButton>
      </Space>
      <br></br>
      <Space align="end">
        <MyButton variant="filled" size="small">
          按钮1
        </MyButton>
        <MyButton variant="filled" size="medium">
          按钮2
        </MyButton>
        <MyButton variant="filled" size="large">
          按钮3
        </MyButton>
      </Space>
      、<br></br>
      <Space align="baseline">
        <MyButton variant="filled" size="small">
          按钮1
        </MyButton>
        <MyButton variant="filled" size="medium">
          按钮2
        </MyButton>
        <MyButton variant="filled" size="large">
          按钮3
        </MyButton>
      </Space>
    </>
  );
}
