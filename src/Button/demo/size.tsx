import { MyButton } from 'rcc-test';
import React from 'react';

const App: React.FC = () => (
  <>
    <MyButton color="primary" size="xs">
      按钮
    </MyButton>
    <MyButton color="secondary" size="sm">
      按钮
    </MyButton>
    <MyButton color="tertiary" size="m">
      按钮
    </MyButton>
    <MyButton color="tertiary" size="l">
      按钮
    </MyButton>
  </>
);

export default App;
