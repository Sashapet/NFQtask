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
}
export interface AppFonts {
  Poppins: {
    Bold: string;
    ExtraBold: string;
    ExtraLight: string;
    Light: string;
    Medium: string;
    Regular: string;
    SemiBold: string;
    Thin: string;
  };
  size: {
    s: number;
  };
}
