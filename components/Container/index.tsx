"use client"
import { styled } from "@/libs/styled-components";

export const Container = styled.div`
  margin: auto;
  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 90%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 80%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 80%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 1200px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 1200px;
  }
`;
