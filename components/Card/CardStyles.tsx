"use client";
import { styled } from "@/libs/styled-components";

export const CardContainer = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 2px solid black;
  position: relative;
`;
