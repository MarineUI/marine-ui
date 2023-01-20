import styled from 'styled-components';
import defaultTheme from '../theme/theme';
import { hexToRgba } from '../utils/colorHelper';
import { capitalize } from '../utils/stringHelper';
import { ButtonProps, Theme } from './interface';

function getTextColor(props: ButtonProps, theme: Theme): string {
  const onColor = 'on' + capitalize(props.color);
  type OnColor = 'onPrimary' | 'onSecondary' | 'onTertiary';
  switch (props.variant) {
    case 'filled':
      if (props.disabled) {
        return hexToRgba(
          defaultTheme.colors.onSurface[theme],
          defaultTheme.opacity.disabledContent
        );
      }
      return props.color
        ? defaultTheme.colors[onColor as OnColor][theme]
        : defaultTheme.colors.primary[theme];
    case 'outlined':
    case 'text':
    default:
      return defaultTheme.colors.primary[theme];
  }
}

function getBgColor(props: ButtonProps, theme: Theme): string {
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

function getBorder(props: ButtonProps, theme: Theme): string {
  switch (props.variant) {
    case 'outlined':
      if (props.disabled) {
        return `1px solid ${hexToRgba(
          defaultTheme.colors.onSurface[theme],
          defaultTheme.opacity.disabledContainer
        )}`;
      }
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

function getHoveredBgColor(props: ButtonProps, theme: Theme): string {
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

function getDisabledBgColor(props: ButtonProps, theme: Theme): string {
  switch (props.variant) {
    case 'filled':
      return hexToRgba(
        defaultTheme.colors.onSurface[theme],
        defaultTheme.opacity.disabledContainer
      );
    case 'outlined':
    case 'text':
    default:
      // outlined和text在disabled状态下都是透明，所以颜色无所谓
      return hexToRgba(defaultTheme.colors.primary[theme], 0);
  }
}

function getDisabledTextColor(theme: Theme) {
  return hexToRgba(
    defaultTheme.colors.onSurface[theme],
    defaultTheme.opacity.disabledContent
  );
}

export const ButtonStyle = styled.button<{ props: ButtonProps }>`
  background-color: ${({ props }) => getBgColor(props, 'light')};
  color: ${({ props }) => getTextColor(props, 'light')};
  border: ${({ props }) => getBorder(props, 'light')};
  cursor: ${({ props }) => getCursor(props)};
  border-radius: 100px;

  &:hover {
    background-color: ${({ props }) => getHoveredBgColor(props, 'light')};
  }

  &:disabled {
    color: ${getDisabledTextColor('light')};
    background-color: ${({ props }) => getDisabledBgColor(props, 'light')};
  }
`;
