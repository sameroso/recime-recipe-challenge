import { ReactNode } from "react";

export type ButtonIntrinsicElements = JSX.IntrinsicElements["button"];

export type IButton = (props: ButtonIntrinsicElements) => ReactNode;
