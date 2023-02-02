import { Switch } from 'marine-ui';
import React from 'react';
import ThemeContext from '../../ThemeContext';

export default function BasicSwitchDemo() {
  return (
    <ThemeContext theme={{ mode: 'light' }}>
      <Switch checked={true}></Switch>
    </ThemeContext>
  );
}
