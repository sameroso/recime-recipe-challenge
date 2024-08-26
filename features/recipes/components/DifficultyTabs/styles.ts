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
      return props.$active
        ? props.theme.colors.primary
        : props.theme.colors.gray;
    }};
`;

export const TabStartButton: ITabButton = styled.button`
  border-radius: ${({ theme }) => theme.borderRadius.medium} 0 0
    ${({ theme }) => theme.borderRadius.medium};
  ${commonTabStyles}
  border-width: 2px ${({ $active }) => ($active ? "2px" : "0")} 2px 2px;
`;

export const TabEndButton: ITabButton = styled.button`
  border-radius: 0 ${({ theme }) => theme.borderRadius.medium}
    ${({ theme }) => theme.borderRadius.medium} 0;
  ${commonTabStyles}
  border-width: 2px 2px 2px ${({ $active }) => ($active ? "2px" : "0")};
`;

export const TabMiddleButton: ITabButton = styled.button`
  ${commonTabStyles}
  border-width: 2px 2px 2px 2px;
`;

export const TabText = styled.p`
  font-weight: bold;
`;
