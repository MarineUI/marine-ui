import { useTheme } from 'styled-components';

type Theme = 'light' | 'dark';

export default function useGlobalTheme(defaultTheme: Theme = 'light'): {
  mode: Theme;
} {
  let theme: any = useTheme() || { mode: defaultTheme };
  return theme;
}
