"use client";

export interface StyledCardProps {
  $active?: boolean;
}

import { Card } from "@/components";
import { styled } from "@/libs/styled-components";

export const ImageWrapper = styled.div`
  position: relative;
  height: 190px;
  width: 100%;
`;

export const StyledCard = styled(Card)<StyledCardProps>`
  width: 200px;
  height: 260px;
  overflow: hidden;
  border-color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : ""};
`;
