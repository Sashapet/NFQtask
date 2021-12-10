import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    type: string;
    colors: AppColors;
    fonts: {
      size: {
        xs: number;
        s: number;
        m: number;
        l: number;
        xl: number;
        xxl: number;
        xxxl: number;
        x64: number;
      };
      weight: {
        regular: string;
        bold: string;
        italic: string;
      };
    };
    shadows: {
      default: string;
      light: string;
      medium: string;
      strong: string;
    };
    headers: {
      main: number;
      inner: number;
      paralax: number;
    };
    hitSlop?: {
      top?: number;
      left?: number;
      bottom?: number;
      right?: number;
    };
  }
}

export interface AppColors {
  primary: string;
  secondary: string;
  secondary20: string;
  primaryContent: string;
  primary15: string;
  primary20: string;
  primary60: string;
  secondaryContent: string;
  invertedContent: string;
  grey20?: string;
  grey60?: string;
  green: string;
  greenLight: string;
  yellow: string;
  lightOrange: string;
  background: string;
  backgroundPrimary: string;
  backgroundSecondary: string;
  white: string;
  blueLight: string;
  white90: string;
  white80: string;
  white60: string;
  white50: string;
  white40: string;
  white30: string;
  white20: string;
  white10: string;
  input: string;
  black: string;
  black80: string;
  black70: string;
  black60: string;
  black50: string;
  black40: string;
  black30: string;
  black20: string;
  black10: string;
  text: string;
  text10: string;
  text15: string;
  text20: string;
  text40: string;
  text50: string;
  text60: string;
  text80: string;
  tabBarItemInactive: string;
  error: string;
  orange: string;
  redDark: string;
  red: string;
  cancel: string;
  border: string;
  almostWhite: string;
  backgroundLight: string;
}
