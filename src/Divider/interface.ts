export type orientatiionType = 'left' | 'right' | 'center' | undefined;
export type directionType = 'horizontal' | 'vertical' | undefined;

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  plain?: string;
  direction?: directionType;
  orientatiion?: orientatiionType;
  dash?: boolean;
}
