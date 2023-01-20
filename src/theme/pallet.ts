import {
  argbFromHex,
  hexFromArgb,
  TonalPalette,
} from '@importantimport/material-color-utilities';
import themeColor from './theme';

const tones = [10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99];
const keyColors = [
  'primary40',
  'secondary40',
  'tertiary40',
  'error40',
  'neutral40',
  'neutralVariant40',
];

interface Pallet {
  primary: any;
  secondary: any;
  tertiary: any;
  error: any;
  neutral: any;
  neutralVariant: any;
  white: any;
  black: any;
}

// 通过几个颜色生成整个色谱
function generatePallet(themeColors: any): Pallet {
  const pallet: any = {};
  keyColors.forEach((key) => {
    const keyName = key.slice(0, -2); // 字符串去掉40
    pallet[keyName] = {};
    tones.forEach((tone) => {
      pallet[keyName][tone] = hexFromArgb(
        TonalPalette.fromInt(argbFromHex(themeColors[key])).tone(tone)
      );
    });
  });
  pallet.white = themeColors.common.white;
  pallet.black = themeColors.common.black;
  return pallet;
}

const pallet = generatePallet(themeColor.color);
export default pallet;
