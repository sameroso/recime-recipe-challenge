"use client";
import { Card, ITabButton, Tabs, TabStyleProps } from "@/components";
import { css, styled } from "@/libs/styled-components";
import { FlipMove } from "@/libs/flip-move";

export const CardContainer = styled(FlipMove)`
  display: grid;
  width: fit-content;
  margin: auto;
  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: repeat(4, 1fr);
  }
  gap: 16px;
`;

export const StyledTabs = styled(Tabs)`
  justify-content: center;
  margin: 20px 0;
`;

export const StyledCard = styled(Card)`
  width: 200px;
  height: 260px;
`;

const commonTabStyles = css<TabStyleProps>`
  padding: 10px 20px;
  cursor: pointer;
  border: solid
    ${(props) => {
      return props.$active ? props.theme.colors.primary : "";
    }};
`;

export const TabStartButton: ITabButton = styled.button<TabStyleProps>`
  border-radius: 5px 0 0 5px;
  ${commonTabStyles}
  border-width: 1px ${({ $active }) => ($active ? "1px" : "0")} 1px 1px;
`;

export const TabEndButton: ITabButton = styled.button<TabStyleProps>`
  border-radius: 0 5px 5px 0;
  ${commonTabStyles}
  border-width: 1px 1px 1px ${({ $active }) => ($active ? "1px" : "0")};
`;

export const TabMiddleButton: ITabButton = styled.button<TabStyleProps>`
  ${commonTabStyles}
  border-width: 1px 1px 1px 1px;
`;
