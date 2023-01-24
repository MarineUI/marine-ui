import React from 'react';
import GlobaleStyle from '../GlobalStyle';
import useGlobalTheme from '../hooks/useGlobalTheme';
import { TypographyProps } from './interface';
import { StyledTypography } from './style';

const Typography: React.FC<TypographyProps> = (props) => {
  const { tag, children, style } = props;
  const theme = useGlobalTheme();
  return (
    <>
      <GlobaleStyle />
      <StyledTypography
        props={props}
        as={tag ? (tag as any) : 'div'}
        theme={theme}
        style={style}
      >
        {children}
      </StyledTypography>
    </>
  );
};

export default Typography;
