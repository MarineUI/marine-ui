import React, { Children, Fragment, ReactNode } from 'react';
import GlobalStyle from '../GlobalStyle';
import tokens from '../theme/tokens';
import { directionType, sizeType, SpaceProps } from './interface';
import { SpaceStyle } from './style';

const getMargin = (size: sizeType) => {
  if (typeof size === 'number' || size === undefined) {
    return size;
  }
  return tokens.space[size] ? tokens.space[size] : 'small';
};

function getMarginWithSize(
  direction: directionType,
  size: sizeType,
  isLast: boolean
) {
  if (!isLast) {
    switch (direction) {
      case 'horizontal':
        return { marginRight: `${getMargin(size)}px` };
      case 'vertical':
        return { marginBottom: `${getMargin(size)}px` };
      default:
        return { marginRight: `${getMargin(size)}px` };
    }
  }
  return {};
}

function getMarginWithSizeArr(
  sizeArr: sizeType[],
  direction: directionType,
  isLast: boolean,
  wrap: boolean
) {
  const marginRight = getMargin(sizeArr[0]);
  const marginBottom = getMargin(sizeArr[1]);

  if (wrap) {
    return {
      marginRight,
      marginBottom,
    };
  }

  if (!isLast) {
    switch (direction) {
      case 'horizontal':
        return { marginRight: `${marginRight}px` };
      case 'vertical':
        return { marginBottom: `${marginBottom}px` };
      default:
        return { marginRight: `${marginRight}px` };
    }
  }

  return {};
}

const Space = (props: SpaceProps) => {
  const {
    children,
    direction = 'horizontal',
    size = 'small',
    wrap = true,
  } = props;
  const childrenList = Children.toArray(children);

  const getMarginStyle = (index: number) => {
    const isLastOne = childrenList.length - 1 === index;
    if (!Array.isArray(size)) {
      return getMarginWithSize(direction, size, isLastOne);
    } else {
      return getMarginWithSizeArr(size, direction, isLastOne, wrap);
    }
  };

  return (
    <>
      <GlobalStyle />
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
