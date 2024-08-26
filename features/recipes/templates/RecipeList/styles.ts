"use client";
import { styled } from "@/libs/styled-components";
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
