import { ButtonIntrinsicElements } from "../../Buttons";
import { ReactNode } from "react";

export interface TabStyleProps {
  $active: "true" | "false";
}

export type ITabButton = (
  props: ButtonIntrinsicElements & TabStyleProps
) => ReactNode;
