import { hexToRgb } from '../colorHelper';

describe('Color Helper Test', () => {
  describe('Hex to Rgb', () => {
    test('Regular Input', () => {
      expect(hexToRgb('#0080C0')).toEqual({ b: 192, g: 128, r: 0 });
    });

    test('Wrong Input', () => {
      expect(() => {
        hexToRgb('#123123jsdfjsdf');
      }).toThrow('Can not convert hex to rgb');
    });

    test('Shorthand Input', () => {
      expect(hexToRgb('#03F')).toEqual({ b: 255, g: 51, r: 0 });
    });
  });
});
