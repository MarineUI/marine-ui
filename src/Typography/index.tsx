import React from 'react';
import GlobaleStyle from '../GlobalStyle';
import { TypographyProps } from './interface';
import { StyledTypography } from './style';

const Typography: React.FC<TypographyProps> = (props) => {
  const { tag, children } = props;
  return (
    <>
      <GlobaleStyle />
      <StyledTypography props={props} as={tag ? (tag as any) : 'div'}>
        {children}
      </StyledTypography>
    </>
  );
};

export default Typography;
