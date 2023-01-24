import styled from 'styled-components';
import { TypographyProps } from './interface';

function getFontWeight(props: TypographyProps): 400 | 500 {
  switch (props.variant) {
    case 'title-medium':
    case 'title-small':
    case 'label-large':
    case 'label-medium':
    case 'label-small':
      return 500;
    case 'display-large':
    case 'display-medium':
    case 'display-small':
    case 'headline-large':
    case 'headline-medium':
    case 'headline-small':
    case 'title-large':
    case 'body-large':
    case 'body-medium':
    case 'body-small':
    default:
      return 400;
  }
}

function getFontSize(props: TypographyProps): number {
  switch (props.variant) {
    case 'display-large':
      return 57 / 16;
    case 'display-medium':
      return 45 / 16;
    case 'display-small':
      return 36 / 16;
    case 'headline-large':
      return 32 / 16;
    case 'headline-medium':
      return 28 / 16;
    case 'headline-small':
      return 24 / 16;
    case 'title-large':
      return 22 / 16;
    case 'title-medium':
    case 'body-large':
    default:
      return 16 / 16;
    case 'title-small':
    case 'label-large':
    case 'body-medium':
      return 14 / 16;
    case 'label-medium':
    case 'body-small':
      return 12 / 16;
    case 'label-small':
      return 11 / 16;
  }
}

function getLineHeight(props: TypographyProps): number {
  switch (props.variant) {
    case 'display-large':
      return 64 / 16;
    case 'display-medium':
      return 52 / 16;
    case 'display-small':
      return 44 / 16;
    case 'headline-large':
      return 40 / 16;
    case 'headline-medium':
      return 36 / 16;
    case 'headline-small':
      return 32 / 16;
    case 'title-large':
      return 28 / 16;
    case 'title-medium':
    case 'body-large':
      return 24 / 16;
    case 'title-small':
    case 'label-large':
    case 'body-medium':
      return 20 / 16;
    case 'label-medium':
    case 'label-small':
    case 'body-small':
    default:
      return 16 / 16;
  }
}

export const StyledTypography = styled.div<{ props: TypographyProps }>`
  font-family: 'Roboto', sans-serif;
  font-weight: ${({ props }) => getFontWeight(props)};
  font-size: ${({ props }) => getFontSize(props)}rem;
  line-height: ${({ props }) => getLineHeight(props)}rem;
  color: ${({ props }) => (props.color ? props.color : 'inherit')};

  ${({ props }) => props.style as string}// user style injection
`;
