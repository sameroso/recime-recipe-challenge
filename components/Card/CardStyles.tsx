"use client";
import { styled } from "@/libs/styled-components";

export const CardContainer = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 1px solid black;
  position: relative;
`;
