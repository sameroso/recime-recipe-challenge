import { ITabButton, Tabs, TabStyleProps } from "@/components";
import { css, styled } from "@/libs/styled-components";

export const StyledTabs = styled(Tabs)`
  justify-content: center;
  margin: 20px 0;
`;

const commonTabStyles = css<TabStyleProps>`
  padding: 10px 20px;
  cursor: pointer;
  border: solid
    ${(props) => {
      return props.$active ? props.theme.colors.primary : "";
    }};
`;

export const TabStartButton: ITabButton = styled.button`
  border-radius: 5px 0 0 5px;
  ${commonTabStyles}
  border-width: 1px ${({ $active }) => ($active ? "1px" : "0")} 1px 1px;
`;

export const TabEndButton: ITabButton = styled.button`
  border-radius: 0 5px 5px 0;
  ${commonTabStyles}
  border-width: 1px 1px 1px ${({ $active }) => ($active ? "1px" : "0")};
`;

export const TabMiddleButton: ITabButton = styled.button`
  ${commonTabStyles}
  border-width: 1px 1px 1px 1px;
`;

export const TabText = styled.p`
  font-weight: bold;
`;
