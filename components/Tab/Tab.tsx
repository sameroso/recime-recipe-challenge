"use client";
import { GenericComponentProps } from "../types";
import { useTabs } from "./TabContext";
import { ITabButton } from "./types";

interface TabProps extends GenericComponentProps {
  component: ITabButton;
  tabId: string | number;
}
export function Tab(props: TabProps) {
  const { onChange, tabId: selectedTabId } = useTabs();
  const { tabId, component, ...rest } = props;
  const TabButton = component;

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
