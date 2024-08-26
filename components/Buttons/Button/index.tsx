"use client";
import { styled, css } from "@/libs/styled-components";
import { IButton } from "../types";
import { buttonSizes, buttonVariants } from "./styles";

export const Button: IButton = styled.button`
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  ${({ $variant }) => buttonVariants[$variant || "default"]}

  ${({ $size }) => buttonSizes[$size || "default"]}
`;
