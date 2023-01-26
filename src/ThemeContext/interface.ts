export type Theme = 'light' | 'dark';

export interface Props {
  children?: React.ReactNode | string;
  theme: { mode: Theme };
}
