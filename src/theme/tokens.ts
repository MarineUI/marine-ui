import pallet from './pallet';

// Color Tokens
// https://m3.material.io/styles/color/the-color-system/tokens

export default {
  colors: {
    primary: {
      light: pallet.primary[40],
      dark: pallet.primary[80],
    },
    primaryContainer: {
      light: pallet.primary[90],
      dark: pallet.primary[30],
    },
    onPrimary: {
      light: pallet.white,
      dark: pallet.primary[20],
    },
    onPrimaryContainer: {
      light: pallet.primary[10],
      dark: pallet.primary[90],
    },
    secondary: {
      light: pallet.secondary[40],
      dark: pallet.secondary[80],
    },
    secondaryContainer: {
      light: pallet.secondary[90],
      dark: pallet.secondary[30],
    },
    onSecondary: {
      light: pallet.white,
      dark: pallet.secondary[20],
    },
    onSecondaryContainer: {
      light: pallet.secondary[10],
      dark: pallet.secondary[90],
    },
    tertiary: {
      light: pallet.tertiary[40],
      dark: pallet.tertiary[80],
    },
    tertiaryContainer: {
      light: pallet.tertiary[90],
      dark: pallet.tertiary[30],
    },
    onTertiary: {
      light: pallet.white,
      dark: pallet.tertiary[20],
    },
    onTertiaryContainer: {
      light: pallet.tertiary[10],
      dark: pallet.tertiary[90],
    },
    surface: {
      light: pallet.neutral[99],
      dark: pallet.neutral[10],
    },
    surfaceVariant: {
      light: pallet.neutralVariant[90],
      dark: pallet.neutralVariant[30],
    },
    onSurface: {
      light: pallet.neutral[10],
      dark: pallet.neutral[90],
    },
    onSurfaceVariant: {
      light: pallet.neutralVariant[30],
      dark: pallet.neutralVariant[80],
    },
    background: {
      light: pallet.neutral[99],
      dark: pallet.neutral[10],
    },
    onBackground: {
      light: pallet.neutral[10],
      dark: pallet.neutral[90],
    },
    error: {
      light: pallet.error[40],
      dark: pallet.error[80],
    },
    errorContainer: {
      light: pallet.error[90],
      dark: pallet.error[30],
    },
    onError: {
      light: pallet.white,
      dark: pallet.error[20],
    },
    onErrorContainer: {
      light: pallet.error[10],
      dark: pallet.error[90],
    },
    outline: {
      light: pallet.neutralVariant[50],
      dark: pallet.neutralVariant[60],
    },
    outlineVariant: {
      light: pallet.neutralVariant[80],
      dark: pallet.neutralVariant[30],
    },
    shadow: {
      light: pallet.black,
      dark: pallet.black,
    },
    surfaceTint: {
      light: pallet.primary[40],
      dark: pallet.primary[80],
    },
    inverseSurface: {
      light: pallet.neutral[20],
      dark: pallet.neutral[90],
    },
    inverseOnSurface: {
      light: pallet.neutral[95],
      dark: pallet.neutral[20],
    },
    inversePrimary: {
      light: pallet.primary[80],
      dark: pallet.primary[40],
    },
    scrim: {
      light: pallet.black,
      dark: pallet.black,
    },
  },
  opacity: {
    hover: 0.08,
    focus: 0.12,
    pressed: 0.12,
    dragged: 0.16,
    disabledContainer: 0.12,
    disabledContent: 0.38,
  },
  space: {
    mini: 4,
    small: 8,
    medium: 16,
    large: 32,
  },
};
