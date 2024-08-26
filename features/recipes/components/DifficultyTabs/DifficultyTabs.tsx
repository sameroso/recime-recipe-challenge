import { Tab } from "@/components";
import {
  StyledTabs,
  TabEndButton,
  TabMiddleButton,
  TabStartButton,
  TabText,
} from "./styles";
import { Recipe } from "@/dtos/Recipe";

interface DifficultyTabsProps {
  tabId: Recipe["difficulty"] | "";
  onChangeTab: (tabId: Recipe["difficulty"]) => void;
}

export function DifficultyTabs(props: DifficultyTabsProps) {
  return (
    <StyledTabs
      value={props.tabId}
      onChangeTab={(tabId) => props.onChangeTab(tabId as Recipe["difficulty"])}
    >
      <Tab tabId="easy" component={TabStartButton}>
        <TabText>Easy</TabText>
      </Tab>
      <Tab tabId="medium" component={TabMiddleButton}>
        <TabText>Medium</TabText>
      </Tab>
      <Tab tabId="hard" component={TabEndButton}>
        <TabText>Hard</TabText>
      </Tab>
    </StyledTabs>
  );
}
