import {
  argbFromHex,
  hexFromArgb,
  TonalPalette,
} from '@material/material-color-utilities';
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

// 通过几个颜色生成整个色谱
function generatePallet(themeColors: any) {
  const pallet: any = {};
  keyColors.forEach((key) => {
    pallet[key] = {};
    tones.forEach((tone) => {
      pallet[key][tone] = hexFromArgb(
        TonalPalette.fromInt(argbFromHex(themeColors[key])).tone(tone)
      );
    });
  });
  return pallet;
}

const pallet = generatePallet(themeColor);
export default pallet;
