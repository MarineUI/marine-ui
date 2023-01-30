import React from 'react';
import { DividerProps } from './interface';
import { DividerStyle } from './style';
const Divider = (props: DividerProps) => {
  const { children } = props;
  return (
    <>
      <DividerStyle props={props}>
        <div className="line">
          <span className="left-line"></span>
          <span className="line-text">{children}</span>
          <span className="right-line"></span>
        </div>
      </DividerStyle>
    </>
  );
};

export default Divider;
