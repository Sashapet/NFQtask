import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: AppColors;
    fonts: AppFonts;
  }
}

export interface AppColors {
  primary: string;
  secondary: string;
}
export interface AppFonts {
  Poppins: {
    PoppinsBold: string;
    PoppinsExtraBold: string;
    PoppinsExtraLight: string;
    PoppinsLight: string;
    PoppinsMedium: string;
    PoppinsRegular: string;
    PoppinsSemiBold: string;
    PoppinsThin: string;
  };
  size: {
    xs: number;
    s: number;
    m: number;
    l: number;
  };
}
