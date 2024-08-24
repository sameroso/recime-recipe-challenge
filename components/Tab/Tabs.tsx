"use client"
import { TabContainer } from "./styles";
import { TabProvider } from "./TabContext";
import { TabId } from "./types";
type DivIntrinsicElements = JSX.IntrinsicElements["div"];

interface TabsProps extends DivIntrinsicElements {
  value: string;
  onChangeTab?: (tabId: TabId) => void;
}

export function Tabs(props: TabsProps) {
  const { onChangeTab, value, ...rest } = props;
  return (
    <TabProvider tabId={value} onChange={(args) => props.onChangeTab?.(args)}>
      <TabContainer {...rest}>{props.children}</TabContainer>
    </TabProvider>
  );
}
