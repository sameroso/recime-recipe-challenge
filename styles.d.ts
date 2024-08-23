// import original module declarations
import "styled-components";
import { Breakpoints } from "./libs/styled-components/breakpoints";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: Breakpoints;
  }
}
