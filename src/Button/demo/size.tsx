import { MyButton } from 'rcc-test';
import React from 'react';

const App: React.FC = () => (
  <>
    <MyButton type="primary" size="xs">
      按钮
    </MyButton>
    <MyButton type="secondary" size="sm">
      按钮
    </MyButton>
    <MyButton type="warn" size="m">
      按钮
    </MyButton>
    <MyButton type="success" size="l">
      按钮
    </MyButton>
  </>
);

export default App;
// export default function BasicButtonDemo() {
//   return (
//     <div>
//       <MyButton type="primary" size="xs">按钮</MyButton>
//       <MyButton type="secondary" size="sm">按钮</MyButton>
//       <MyButton type="warn" size="m">按钮</MyButton>
//       <MyButton type="success" size="l">按钮</MyButton>
//     </div>
//   )
// }
