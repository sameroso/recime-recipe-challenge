"use client";
import { Skeleton } from "@/components";
import { styled } from "@/libs/styled-components";
import { CARD_TEXT_MARGIN_LEFT, CARD_TEXT_MARGIN_TOP } from "../shared/constants";

export const SkeletonImage = styled(Skeleton)`
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;

export const SkeletontTitle = styled(Skeleton)`
  margin-top: ${CARD_TEXT_MARGIN_TOP};
  margin-left: ${CARD_TEXT_MARGIN_LEFT};
`;
