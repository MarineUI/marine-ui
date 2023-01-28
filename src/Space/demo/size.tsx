import { MyButton, Space } from 'marine-ui';
import React from 'react';

export default function index1() {
  return (
    <>
      <Space size="mini">
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
      <br></br>
      <Space size="small">
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
      <br></br>
      <Space size="medium">
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
      <br></br>
      <Space size="large">
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
    </>
  );
}
