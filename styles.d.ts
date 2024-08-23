// import original module declarations
import "styled-components";
import { Breakpoints } from "./libs/styled-components/theme/breakpoints";
import { Colors, Breakpoints } from "./libs/styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: Breakpoints;
    colors: Colors;
  }
}
