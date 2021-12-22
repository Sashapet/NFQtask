import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: AppColors;
    fonts: AppFonts;
    spacing: {
      xs: number;
      s: number;
    };
  }
}

export interface AppColors {
  primary: string;
  secondary: string;
  black: string;
  white: string;
  red: string;
  black01: string;
  black02: string;
}
export interface AppFonts {
  size: {
    s: number;
  };
}
