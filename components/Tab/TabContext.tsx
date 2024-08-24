"use client";
import { createContext, PropsWithChildren, useContext } from "react";
import { TabId } from "./types";

const TabContext = createContext<{
  onChange: (value: TabId) => void;
  tabId?: TabId;
} | null>(null);

export function TabProvider(
  props: PropsWithChildren<{
    tabId?: TabId;
    onChange: (tabId: TabId) => void;
  }>
) {
  const onChange = (tabId: TabId) => {
    props?.onChange(tabId);
  };

  return (
    <TabContext.Provider value={{ onChange, tabId: props.tabId }}>
      {props.children}
    </TabContext.Provider>
  );
}

export const useTabs = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("Tab must be used inside Tabs");
  }

  return context;
};
