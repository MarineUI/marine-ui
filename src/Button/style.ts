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
        : tokens.colors.onPrimary[theme];
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
    case 'filled':
      return props.color
        ? hexToRgba(tokens.colors[props.color][theme], 1 - tokens.opacity.hover)
        : hexToRgba(tokens.colors.primary[theme], 1 - tokens.opacity.hover);
    case 'outlined':
    case 'text':
    default:
      return props.color
        ? hexToRgba(tokens.colors[props.color][theme], tokens.opacity.hover)
        : hexToRgba(tokens.colors.primary[theme], tokens.opacity.hover);
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

function getPadding(props: ButtonProps) {
  switch (props.size) {
    case 'small':
      return '7px 17px';
    case 'large':
      return '13px 31px';
    case 'medium':
    default:
      return '10px 24px';
  }
}

export const ButtonStyle = styled.button<{ props: ButtonProps }>`
  background-color: ${({ props, theme }) => getBgColor(props, theme.mode)};
  border: ${({ props, theme }) => getBorder(props, theme.mode)};
  cursor: ${({ props }) => getCursor(props)};
  border-radius: 100px;
  color: ${({ props, theme }) => getTextColor(props, theme.mode)};
  padding: ${({ props }) => getPadding(props)};
  transition: background-color, 250ms;

  &:hover {
    background-color: ${({ props, theme }) =>
      getHoveredBgColor(props, theme.mode)};
  }

  &:disabled {
    color: ${({ theme }) => getDisabledTextColor(theme.mode)};
    background-color: ${({ props, theme }) =>
      getDisabledBgColor(props, theme.mode)};
  }
`;
