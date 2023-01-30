import styled from 'styled-components';
import { DividerProps } from './interface';

const getMargin = (props: DividerProps) => {
  if (!props.children) {
    return '0';
  }
  return '0 20px';
};

export const DividerStyle = styled.div<{ props: DividerProps }>`
  .line {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .left-line,
  .right-line {
    flex: 1;
    color: #dcdcdc;
    border-color: inherit;
    border-bottom: 1px solid;
  }
  .line-text {
    margin: ${({ props }) => getMargin(props)};
    color: #000;
    font-size: 14px;
  }
`;
