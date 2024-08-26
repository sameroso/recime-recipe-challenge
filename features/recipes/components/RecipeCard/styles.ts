import { Card } from "@/components";
import { styled } from "@/libs/styled-components";
export interface StyledCardProps {
  $active: boolean;
}

export const StyledCard = styled(Card)<StyledCardProps>`
  width: 200px;
  height: 260px;
  border-color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : ""};
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 190px;
  width: 100%;
`;

export const Title = styled.h4<StyledCardProps>`
  color: ${({ $active, theme }) => ($active ? theme.colors.primary : "")};
  transition: all;
`;

export const SubTitle = styled.h5<StyledCardProps>`
  color: ${({ $active, theme }) => ($active ? theme.colors.primary : "")};
  transition: all;
`;
