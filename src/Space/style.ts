import styled from 'styled-components';
import { alignType, directionType, SpaceProps } from './interface';

function getAlign(align: alignType) {
  switch (align) {
    case 'start':
      return 'flex-start';
    case 'center':
      return 'center';
    case 'end':
      return 'flex-end';
    case 'baseline':
      return 'baseline';
    default:
      return 'flex-start';
  }
}

function getDirection(direction: directionType) {
  switch (direction) {
    case 'horizontal':
      return 'row';
    case 'vertical':
      return 'column';
    default:
      return 'row';
  }
}
export const SpaceStyle = styled.div<{ props: SpaceProps }>`
  .container {
    display: flex;
    align-items: ${({ props }) => getAlign(props.align)};
    flex-direction: ${({ props }) => getDirection(props.direction)};
  }

  .marine-space {
    flex-wrap: wrap;

    display: inline-block;
  }
`;
