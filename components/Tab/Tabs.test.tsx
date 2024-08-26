import "@testing-library/jest-dom";
import "jest-styled-components";
import { render, screen, waitFor } from "@testing-library/react";
import { AppProvider } from "@/providers/appProvider";
import { Tab } from "./Tab";
import { Tabs } from "./Tabs";
import { ITabButton } from "./types";
import { ComponentProps, useState } from "react";

const bgColorSelected = "red";
const bgColorNotSelected = "green";

const SimpleTab: ITabButton = (props) => {
  const { $active, ref, ...rest } = props;
  return (
    <button
      {...rest}
      onClick={(e) => props.onClick?.(e)}
      style={{
        backgroundColor: props.$active ? bgColorSelected : bgColorNotSelected,
      }}
    >
      {props.children}
    </button>
  );
};

const TabContainer = (props: ComponentProps<typeof Tabs>) => {
  const [tabId, setTabId] = useState(props.value);
  return (
    <Tabs
      {...props}
      value={tabId}
      onChangeTab={(tabId) => {
        setTabId(tabId as string);
      }}
    ></Tabs>
  );
};

describe("Tabs tests", () => {
  it("should render cards succesully when with tab1 selected", () => {
    render(
      <AppProvider>
        <TabContainer value="tab1">
          <Tab component={SimpleTab} tabId="tab1" data-testid="tab1">
            Tab1
          </Tab>
          <Tab component={SimpleTab} tabId="tab2" data-testid="tab2">
            Tab2
          </Tab>
          <Tab component={SimpleTab} tabId="tab3" data-testid="tab3">
            Tab3
          </Tab>
        </TabContainer>
      </AppProvider>
    );

    expect(screen.getByTestId("tab1")).toHaveStyle(
      `background-color:${bgColorSelected};`
    );

    expect(screen.getByTestId("tab2")).toHaveStyle(
      `background-color:${bgColorNotSelected};`
    );
    expect(screen.getByTestId("tab3")).toHaveStyle(
      `background-color:${bgColorNotSelected};`
    );
  });

  it("should change selected tab when clicking on different tab", async () => {
    render(
      <AppProvider>
        <TabContainer value="tab1">
          <Tab component={SimpleTab} tabId="tab1" data-testid="tab1">
            Tab1
          </Tab>
          <Tab component={SimpleTab} tabId="tab2" data-testid="tab2">
            Tab2
          </Tab>
          <Tab component={SimpleTab} tabId="tab3" data-testid="tab3">
            Tab3
          </Tab>
        </TabContainer>
      </AppProvider>
    );

    expect(screen.getByTestId("tab1")).toHaveStyle(
      `background-color:${bgColorSelected};`
    );

    expect(screen.getByTestId("tab2")).toHaveStyle(
      `background-color:${bgColorNotSelected};`
    );
    expect(screen.getByTestId("tab3")).toHaveStyle(
      `background-color:${bgColorNotSelected};`
    );

    screen.getByTestId("tab3").click();

    await waitFor(() => {
      expect(screen.getByTestId("tab1")).toHaveStyle(
        `background-color:${bgColorNotSelected};`
      );
    });

    expect(screen.getByTestId("tab2")).toHaveStyle(
      `background-color:${bgColorNotSelected};`
    );
    expect(screen.getByTestId("tab3")).toHaveStyle(
      `background-color:${bgColorSelected};`
    );
  });

  it("should all tabs come disabled when value does not match any tab", async () => {
    render(
      <AppProvider>
        <TabContainer value="">
          <Tab component={SimpleTab} tabId="tab1" data-testid="tab1">
            Tab1
          </Tab>
          <Tab component={SimpleTab} tabId="tab2" data-testid="tab2">
            Tab2
          </Tab>
          <Tab component={SimpleTab} tabId="tab3" data-testid="tab3">
            Tab3
          </Tab>
        </TabContainer>
      </AppProvider>
    );

    expect(screen.getByTestId("tab1")).toHaveStyle(
      `background-color:${bgColorNotSelected};`
    );

    expect(screen.getByTestId("tab2")).toHaveStyle(
      `background-color:${bgColorNotSelected};`
    );
    expect(screen.getByTestId("tab3")).toHaveStyle(
      `background-color:${bgColorNotSelected};`
    );
  });
});
