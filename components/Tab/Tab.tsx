import { GenericComponentProps } from "@/types";
import { useTabs } from "./TabContext";
import { ITabButton } from "./variants/types";

interface TabProps extends GenericComponentProps {
  component: ITabButton;
  tabId: string | number;
}
export function Tab(props: TabProps) {
  const { onChange, tabId: selectedTabId } = useTabs();
  const TabButton = props.component;

  const { tabId, ...rest } = props;

  return (
    <TabButton
      $active={selectedTabId === tabId}
      {...rest}
      onClick={(e) => {
        onChange?.(props.tabId);
        props?.onClick?.(e);
      }}
    />
  );
}
