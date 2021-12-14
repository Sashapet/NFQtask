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
}
export interface AppFonts {
  size: {
    s: number;
  };
}
