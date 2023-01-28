import React from 'react';

export type sizeType = 'mini' | 'small' | 'medium' | 'large' | undefined;
export type alignType = 'start' | 'center' | 'end' | 'baseline' | undefined;
export type directionType = 'horizontal' | 'vertical' | undefined;
export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: directionType;
  size?: sizeType | sizeType[];
  align?: alignType;
  wrap?: boolean;
}
