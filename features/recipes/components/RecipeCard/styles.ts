import { styled } from "@/libs/styled-components";
import { StyledCardProps } from "../shared/styles";
import { CARD_TEXT_MARGIN_LEFT, CARD_TEXT_MARGIN_TOP } from "../shared/constants";

export const Title = styled.h4<StyledCardProps>`
  color: ${({ $active, theme }) => ($active ? theme.colors.primary : "")};
  transition: all;
  margin-left: ${CARD_TEXT_MARGIN_LEFT};
  margin-top: ${CARD_TEXT_MARGIN_TOP};
`;

export const SubTitle = styled.h5<StyledCardProps>`
  color: ${({ $active, theme }) => ($active ? theme.colors.primary : "")};
  transition: all;
  margin-left: ${CARD_TEXT_MARGIN_LEFT};
`;
