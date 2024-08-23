"use client";

import { ButtonIntrinsicElements } from "../Buttons";
import { useTabs } from "./TabContext";
import { ITabButton } from "./variants/types";

interface TabProps {
  ButtonProps?: ButtonIntrinsicElements;
  component: ITabButton;
  tabId: string | number;
}
export function Tab(props: TabProps) {
  const { onChange, tabId } = useTabs();
  const TabButton = props.component;

  return (
    <TabButton
      $active={tabId === props.tabId ? "true" : "false"}
      {...props.ButtonProps}
      onClick={(e) => {
        onChange?.(props.tabId);
        props.ButtonProps?.onClick?.(e);
      }}
    />
  );
}
