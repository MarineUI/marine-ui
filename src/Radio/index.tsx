import React from 'react';
import type { RadioProps } from './interface';
import { RadioStyle } from './style';

const Radio = (props: RadioProps) => {
  const { children, className, disabled } = props;

  return (
    <label className={className}>
      <RadioStyle type="radio" disabled={disabled} />
      {children}
    </label>
  );
};

export default Radio;
