export type TabId = string | number;
import { GenericComponentProps, GeneriComponent } from "../types";

export interface TabStyleProps {
  $active: boolean;
}

export type TabButtonProps = GenericComponentProps<TabStyleProps>;
export type ITabButton = GeneriComponent<TabStyleProps>;
