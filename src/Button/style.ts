import styled from 'styled-components';
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

interface colorProps {
  [index: string]: string;
}
const colorObj: colorProps = {
  primary: '#4e67f2',
  secondary: '#9748da',
  success: '#50c969',
  warning: '#e7ab35',
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
/**
 * 根据预设获取颜色
 * @param color
 * @returns
 */
const getColor = (color: string): string => {
  const propsColor = colorObj[color];
  console.log(propsColor);
  if (propsColor !== undefined) {
    return propsColor;
  }
  return color;
};
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
  // 按钮颜色
  background-color: ${({ props }) =>
    props.type ? getColor(props.type) : defaultConfig['ButtonColor']};
  // 字体颜色
  color: ${({ props }) =>
    props.color ? props.color : defaultConfig['TextColor']};
  // 字体大小
  font-size: ${({ props }) =>
    props.size ? getSize(props.size, 'fontSize') : defaultConfig['fontSize']};
  margin: 0 1em;
  // 按钮宽度
  padding-left: ${({ props }) =>
    props.size
      ? getSize(props.size, 'buttonWidth')
      : defaultConfig['buttonWidth']};
  padding-right: ${({ props }) =>
    props.size
      ? getSize(props.size, 'buttonWidth')
      : defaultConfig['buttonWidth']};
  // 按钮高度
  padding-top: ${({ props }) =>
    props.size
      ? getSize(props.size, 'buttonHeight')
      : defaultConfig['buttonHeight']};
  padding-bottom: ${({ props }) =>
    props.size
      ? getSize(props.size, 'buttonHeight')
      : defaultConfig['buttonHeight']};
  border-radius: 0.5em;
  // 取消按钮边框
  border: none;
  // 鼠标指针
  cursor: pointer;
`;
