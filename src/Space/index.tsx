import tokens from 'marine-ui/theme/tokens';
import React, { Children, Fragment, ReactNode } from 'react';
import { sizeType, SpaceProps } from './interface';
import { SpaceStyle } from './style';
const getMargin = (size: sizeType) => {
  if (typeof size === 'number' || size === undefined) {
    return size;
  }
  return tokens.space[size];
};

const Space = (props: SpaceProps) => {
  const { children, direction = 'row', size = 'small', wrap } = props;
  const childrenList = Children.toArray(children);
  const getMarginStyle = (index: number) => {
    const isLastOne = childrenList.length - 1 === index;
    if (!Array.isArray(size)) {
      if (!isLastOne) {
        switch (direction) {
          case 'horizontal':
            return { marginRight: `${getMargin(size)}px` };
          case 'vertical':
            return { marginBottom: `${getMargin(size)}px` };
          default:
            return { marginRight: `${getMargin(size)}px` };
        }
      } else {
        return {};
      }
    }
    const marginRight = getMargin(size[0]);
    const marginBottom = getMargin(size[1]);
    if (wrap) {
      return {
        marginRight,
        marginBottom,
      };
    }
    if (!isLastOne) {
      switch (direction) {
        case 'horizontal':
          return { marginRight: `${marginRight}px` };
        case 'vertical':
          return { marginBottom: `${marginBottom}px` };
        default:
          return { marginRight: `${getMargin(size)}px` };
      }
    } else {
      return {};
    }
  };

  return (
    <>
      <SpaceStyle props={props}>
        <div className="container">
          {childrenList.map((child: ReactNode, index: number) => {
            return (
              <Fragment key={index}>
                <div className="marine-space" style={getMarginStyle(index)}>
                  {child}
                </div>
              </Fragment>
            );
          })}
        </div>
      </SpaceStyle>
    </>
  );
};

export default Space;
