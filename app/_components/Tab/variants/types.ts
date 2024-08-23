import { ButtonIntrinsicElements } from "../../Buttons";
import { ReactNode } from "react";

export interface TabStyleProps {
  $active: boolean;
}

export type ITabButton = (
  props: ButtonIntrinsicElements & TabStyleProps
) => ReactNode;
