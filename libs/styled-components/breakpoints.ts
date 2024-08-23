export interface Breakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}
import { DefaultTheme } from "styled-components/dist/types";

export const breakpoints: Breakpoints = {
  xs: "0px",
  sm: "600px",
  md: "900px",
  lg: "1200px",
  xl: "1536px",
};

export const minWidthBreakpoint: Breakpoints = Object.entries(
  breakpoints
).reduce<DefaultTheme["breakpoints"]>((acc, [key, value]) => {
  return {
    ...acc,
    [key]: `(min-width: ${value})`,
  };
}, {} as Breakpoints);
