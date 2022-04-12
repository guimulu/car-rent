import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    primary: string;
    secondary: string;
    tertiary: string;
    green: string;
    red: string;
    white: string;
    black: string;
    color: string;
  }
}
