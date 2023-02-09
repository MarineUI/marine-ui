import { Radio, Space } from 'marine-ui';
import React from 'react';

export default function App() {
  return (
    <div>
      <Space>
        <Radio>Radio</Radio>
        <Radio disabled>disabled Radio</Radio>
      </Space>
    </div>
  );
}
