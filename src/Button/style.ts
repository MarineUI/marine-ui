import styled from 'styled-components';
import defaultTheme from '../theme/theme';
import { hexToRgba } from '../utils/colorHelper';
import { capitalize } from '../utils/stringHelper';
import { ButtonProps, sizeProps } from './interface';

interface defaultConfigProps {
  [index: string]: string;
}

const defaultConfig: defaultConfigProps = {
  ButtonColor: '#4e67f2',
  TextColor: '#fff',
  fontSize: '1em',
  buttonWidth: '1.5em',
  buttonHeight: '0.5em',
};

const sizeObj: sizeProps = {
  xs: {
    buttonWidth: '1em',
    buttonHeight: '0.2em',
    fontSize: '0.7em',
  },
  sm: {
    buttonWidth: '1.1em',
    buttonHeight: '0.3em',
    fontSize: '0.8em',
  },
  m: {
    buttonWidth: '1.3em',
    buttonHeight: '0.4em',
    fontSize: '0.9em',
  },
  l: {
    buttonWidth: '1.4em',
    buttonHeight: '0.5em',
    fontSize: '1em',
  },
};

function getTextColor(props: ButtonProps, theme: 'light' | 'dark'): string {
  const onColor = 'on' + capitalize(props.color);
  type OnColor = 'onPrimary' | 'onSecondary' | 'onTertiary';
  switch (props.variant) {
    case 'filled':
      return props.color
        ? defaultTheme.colors[onColor as OnColor][theme]
        : defaultTheme.colors.primary[theme];
    case 'outlined':
    case 'text':
    default:
      return defaultTheme.colors.primary[theme];
  }
}

/**
 * 根据预设获取颜色
 * @param color
 * @returns
 */
function getBgColor(props: ButtonProps, theme: 'light' | 'dark'): string {
  switch (props.variant) {
    case 'filled':
      return props.color
        ? defaultTheme.colors[props.color][theme]
        : defaultTheme.colors.primary[theme];
    case 'outlined':
    case 'text':
      return props.color
        ? hexToRgba(defaultTheme.colors[props.color][theme], 0)
        : hexToRgba(defaultTheme.colors.primary[theme], 0);
    default:
      return hexToRgba(defaultTheme.colors.primary[theme], 0);
  }
}

function getBorder(props: ButtonProps, theme: 'light' | 'dark'): string {
  switch (props.variant) {
    case 'outlined':
      return `1px solid ${defaultTheme.colors.outline[theme]}`;
    case 'filled':
    case 'text':
    default:
      return 'none';
  }
}

function getCursor(props: ButtonProps): string {
  return props.disabled ? 'not-allowed' : 'pointer';
}

function getHoveredBgColor(
  props: ButtonProps,
  theme: 'light' | 'dark'
): string {
  switch (props.variant) {
    case 'outlined':
    case 'text':
      return props.color
        ? hexToRgba(
            defaultTheme.colors[props.color][theme],
            defaultTheme.opacity.hover
          )
        : hexToRgba(
            defaultTheme.colors.primary[theme],
            defaultTheme.opacity.hover
          );
    case 'filled':
    default:
      return props.color
        ? hexToRgba(
            defaultTheme.colors[props.color][theme],
            1 - defaultTheme.opacity.hover
          )
        : hexToRgba(
            defaultTheme.colors.primary[theme],
            1 - defaultTheme.opacity.hover
          );
  }
}

/**
 * 根据预设获取大小
 * @param size
 * @param type
 * @returns
 */
const getSize = (size: string, type: string): string | undefined => {
  const isEnum = sizeObj[size];
  if (isEnum === undefined) return defaultConfig[type];
  return isEnum[type];
};

export const ButtonStyle = styled.button<{ props: ButtonProps }>`
  background-color: ${({ props }) => getBgColor(props, 'light')};
  color: ${({ props }) => getTextColor(props, 'light')};
  border: ${({ props }) => getBorder(props, 'light')};
  cursor: ${({ props }) => getCursor(props)};
  font-size: ${({ props }) =>
    props.size ? getSize(props.size, 'fontSize') : defaultConfig['fontSize']};
  border-radius: 0.5em;

  &:hover {
    background-color: ${({ props }) => getHoveredBgColor(props, 'light')};
  }

  margin: 0 1em;
  padding-left: ${({ props }) =>
    props.size
      ? getSize(props.size, 'buttonWidth')
      : defaultConfig['buttonWidth']};
  padding-right: ${({ props }) =>
    props.size
      ? getSize(props.size, 'buttonWidth')
      : defaultConfig['buttonWidth']};
  padding-top: ${({ props }) =>
    props.size
      ? getSize(props.size, 'buttonHeight')
      : defaultConfig['buttonHeight']};
  padding-bottom: ${({ props }) =>
    props.size
      ? getSize(props.size, 'buttonHeight')
      : defaultConfig['buttonHeight']};
`;
