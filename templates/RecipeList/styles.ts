import { Tabs } from "@/components";
import { styled } from "@/libs/styled-components";

export const CardContainer = styled.div`
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

export const ImageWrapper = styled.div`
  position: relative;
  height: 190px;
  width: 100%;
`;
