import React from 'react';

export type sizeType = 'mini' | 'small' | 'medium' | 'large' | undefined;
export type alignType = 'start' | 'center' | 'end' | 'baseline' | undefined;
export type directionType = 'horizontal' | 'vertical' | undefined;
export type sizeObjType = { marginRight: sizeType; marginBottom: sizeType };
export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: directionType;
  size?: sizeType | sizeObjType;
  align?: alignType;
  wrap?: boolean;
}
