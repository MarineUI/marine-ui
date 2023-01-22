import React from 'react';

export type Display = 'display-large' | 'display-medium' | 'display-small';
export type Headline = 'headline-large' | 'headline-medium' | 'headline-small';
export type Title = 'title-large' | 'title-medium' | 'title-small';
export type Label = 'label-large' | 'label-medium' | 'label-small';
export type Body = 'body-large' | 'body-medium' | 'body-small';

export type Variant = Display | Headline | Title | Label | Body;

export type Tag = string;

export interface TypographyProps {
  variant?: Variant;
  tag?: Tag;
  children?: string | null;
  style?: React.CSSProperties;
  color?: string;
}
