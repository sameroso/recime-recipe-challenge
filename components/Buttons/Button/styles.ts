import { css, RuleSet } from "@/libs/styled-components";
import { ButtonSizes, ButtonVariants } from "../types";

type ConncatDefaultToUnion<TUnion extends string> = TUnion | "default";

const PrimaryButton = css`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
`;

const SmallButton = css`
  padding: 10px 10px;
`;

const MediumButton = css`
  padding: 10px 20px;
`;

const LargeButton = css`
  padding: 10px 30px;
`;

export const buttonVariants: Record<
  ConncatDefaultToUnion<ButtonVariants>,
  RuleSet<object>
> = {
  primary: PrimaryButton,
  default: PrimaryButton,
};

export const buttonSizes: Record<
  ConncatDefaultToUnion<ButtonSizes>,
  RuleSet<object>
> = {
  large: LargeButton,
  medium: MediumButton,
  small: SmallButton,
  default: MediumButton,
};
