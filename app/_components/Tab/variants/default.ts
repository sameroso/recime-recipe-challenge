"use client";
import styled, { css } from "styled-components";
import { Button } from "../../Buttons";
import { ITabButton, TabStyleProps } from "./types";

const commonStyles = css<TabStyleProps>`
  padding: 10px 20px;
  ${(props) => {
    return props.$active === "true" ? "background-color:green" : "";
  }}
`;

const TabStartButton: ITabButton = styled(Button)<TabStyleProps>`
  border-radius: 5px 0 0 5px;
  ${commonStyles}
`;

const TabEndButton: ITabButton = styled(Button)<TabStyleProps>`
  border-radius: 0 5px 5px 0;
  ${commonStyles}
`;

const TabMiddleButton: ITabButton = styled(Button)<TabStyleProps>`
  border-radius: 0 0px 0px 0;
  ${commonStyles}
`;

export const DefaultTabButtons = {
  start: TabStartButton,
  middle: TabMiddleButton,
  end: TabEndButton,
};
