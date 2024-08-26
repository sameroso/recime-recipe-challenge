import {
  GlobalStyle,
  recipeTheme,
  ThemeProvider,
} from "@/libs/styled-components";
import StyledComponentsRegistry from "@/libs/styled-components/registry";
import { ReactQueryProvider } from "@/libs/react-query/providers";

export function AppProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={recipeTheme}>
      <ReactQueryProvider>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </ReactQueryProvider>
    </ThemeProvider>
  );
}
