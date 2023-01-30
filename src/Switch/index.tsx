import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  // className?: string;
  children?: React.ReactNode;
}

const SwitchContainer = styled.button<{ checked: boolean }>`
  display: inline-block;
  width: 50px;
  height: 30px;
  background-color: ${({ checked }) => (checked ? 'green' : 'gray')};
  border-radius: 15px;
  border: none;
  color: white;
  text-align: center;
`;

const Switch: React.FC<Props> = ({
  checked,
  disabled,
  onChange,
  // className,
}) => {
  const [state, setState] = useState(checked);
  const handleClick = () => {
    if (disabled) {
      return;
    }
    const newChecked = !state;
    setState(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };
  return (
    <SwitchContainer checked={state} onClick={handleClick}>
      {state ? 'ON' : 'OFF'}
    </SwitchContainer>
  );
};

export default Switch;
