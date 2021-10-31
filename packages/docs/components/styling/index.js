import { ThemeProvider } from '@platzily-ui/styling';

import DefaultStyledBoxComponent from './DefaultStyledBox';
import UseThemeStyledBoxComponent from './UseThemeStyledBox';

import { defaultTheme, customTheme } from './theme';

export function DefaultStyledBox({ color }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DefaultStyledBoxComponent color={color}/>
    </ThemeProvider>
  );
}

export function UseThemeStyledBox({ color }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <UseThemeStyledBoxComponent color={color}/>
    </ThemeProvider>
  );
}

export function CustomThemeStyledBox() {
  return (
    <ThemeProvider theme={customTheme}>
      <DefaultStyledBoxComponent/>
    </ThemeProvider>
  );
}