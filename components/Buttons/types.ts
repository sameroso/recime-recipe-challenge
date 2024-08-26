import { ReactNode } from "react";

export type ButtonIntrinsicElements = JSX.IntrinsicElements["button"];

export type ButtonSizes = "medium" | "small" | "large";

export type ButtonVariants = "primary";

export interface ButtonStyleProps {
  $size?: ButtonSizes;
  $variant?: ButtonVariants;
}

export type IButton = (
  props: ButtonIntrinsicElements & ButtonStyleProps
) => ReactNode;
