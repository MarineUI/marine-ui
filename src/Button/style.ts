import styled from 'styled-components';
import { ButtonProps, sizeProps } from './interface';
enum defaultConfig {
  ButtonColor = '#4e67f2',
  TextColor = '#fff',
  fontSize = '1em',
  paddingL = '1.5em',
  paddingH = '0.5em',
}
const colorMap = new Map<string, string>([
  ['primary', '#4e67f2'],
  ['secondary', '#9748da'],
  ['success', '#50c969'],
  ['warn', '#e7ab35'],
]);
const sizeMap = new Map<string, sizeProps>([
  [
    'xs',
    {
      paddingL: '1em',
      paddingH: '0.2em',
      fontSize: '0.7em',
    },
  ],
  [
    'sm',
    {
      paddingL: '1.1em',
      paddingH: '0.3em',
      fontSize: '0.8em',
    },
  ],
  [
    'm',
    {
      paddingL: '1.3em',
      paddingH: '0.4em',
      fontSize: '0.9em',
    },
  ],
  [
    'l',
    {
      paddingL: '1.4em',
      paddingH: '0.5em',
      fontSize: '1em',
    },
  ],
]);

const getColor = (color: string): string => {
  const propsColor = colorMap.get(color);
  if (propsColor !== undefined) {
    return propsColor;
  }
  return color;
};
const getSize = (size: string, type: string): string | undefined => {
  const isEnum = sizeMap.get(size);
  if (isEnum === undefined) return;
  return isEnum[type];
};
export const ButtonStyle = styled.span<{ props: ButtonProps }>`
  background-color: ${({ props }) =>
    props.type ? getColor(props.type) : defaultConfig.ButtonColor};
  color: ${({ props }) =>
    props.color ? props.color : defaultConfig.TextColor};
  font-size: ${({ props }) =>
    props.size ? getSize(props.size, 'fontSize') : defaultConfig.fontSize};
  margin: 1em 2em;
  padding-left: ${({ props }) =>
    props.size ? getSize(props.size, 'paddingL') : defaultConfig.paddingL};
  padding-right: ${({ props }) =>
    props.size ? getSize(props.size, 'paddingL') : defaultConfig.paddingL};
  padding-top: ${({ props }) =>
    props.size ? getSize(props.size, 'paddingH') : defaultConfig.paddingH};
  padding-bottom: ${({ props }) =>
    props.size ? getSize(props.size, 'paddingH') : defaultConfig.paddingH};
  border-radius: 0.5em;
`;
