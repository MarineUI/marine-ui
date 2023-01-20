import capitalize from 'lodash/capitalize';
import styled from 'styled-components';
import tokens from '../theme/tokens';
import { hexToRgba } from '../utils/colorHelper';
import { ButtonProps, Theme } from './interface';

function getTextColor(props: ButtonProps, theme: Theme): string {
  const onColor = 'on' + capitalize(props.color); // 加前缀on，匹配token
  type OnColor = 'onPrimary' | 'onSecondary' | 'onTertiary';
  switch (props.variant) {
    case 'filled':
      if (props.disabled) {
        return hexToRgba(
          tokens.colors.onSurface[theme],
          tokens.opacity.disabledContent
        );
      }
      return props.color
        ? tokens.colors[onColor as OnColor][theme]
        : tokens.colors.primary[theme];
    case 'outlined':
    case 'text':
    default:
      return tokens.colors.primary[theme];
  }
}

function getBgColor(props: ButtonProps, theme: Theme): string {
  switch (props.variant) {
    case 'filled':
      return props.color
        ? tokens.colors[props.color][theme]
        : tokens.colors.primary[theme];
    case 'outlined':
    case 'text':
      return props.color
        ? hexToRgba(tokens.colors[props.color][theme], 0)
        : hexToRgba(tokens.colors.primary[theme], 0);
    default:
      return hexToRgba(tokens.colors.primary[theme], 0);
  }
}

function getBorder(props: ButtonProps, theme: Theme): string {
  switch (props.variant) {
    case 'outlined':
      if (props.disabled) {
        return `1px solid ${hexToRgba(
          tokens.colors.onSurface[theme],
          tokens.opacity.disabledContainer
        )}`;
      }
      return `1px solid ${tokens.colors.outline[theme]}`;
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
        ? hexToRgba(tokens.colors[props.color][theme], tokens.opacity.hover)
        : hexToRgba(tokens.colors.primary[theme], tokens.opacity.hover);
    case 'filled':
    default:
      return props.color
        ? hexToRgba(tokens.colors[props.color][theme], 1 - tokens.opacity.hover)
        : hexToRgba(tokens.colors.primary[theme], 1 - tokens.opacity.hover);
  }
}

function getDisabledBgColor(props: ButtonProps, theme: Theme): string {
  switch (props.variant) {
    case 'filled':
      return hexToRgba(
        tokens.colors.onSurface[theme],
        tokens.opacity.disabledContainer
      );
    case 'outlined':
    case 'text':
    default:
      // outlined和text在disabled状态下都是透明，所以颜色无所谓
      return hexToRgba(tokens.colors.primary[theme], 0);
  }
}

function getDisabledTextColor(theme: Theme) {
  return hexToRgba(
    tokens.colors.onSurface[theme],
    tokens.opacity.disabledContent
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
