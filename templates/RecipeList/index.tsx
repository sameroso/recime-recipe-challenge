"use client";
import { useState } from "react";
import Image from "next/image";
import { Recipe } from "../../dtos/Recipe";
import {
  CardContainer,
  ImageWrapper,
  StyledCard,
  StyledTabs,
  TabEndButton,
  TabMiddleButton,
  TabStartButton,
} from "./styles";
import { Tab } from "@/components";

export function TrendingRecipes(props: { recipes: Recipe[] }) {
  const [tabId, setTabId] = useState<string>('');

  const { recipes = [] } = props;
  return (
    <div style={{ margin: "auto" }}>
      <StyledTabs
        value={tabId}
        onChangeTab={(tabId) => setTabId(tabId as string)}
      >
        <Tab tabId="123" component={TabStartButton}>
          Easy
        </Tab>
        <Tab tabId="234" component={TabMiddleButton}>
          Medium
        </Tab>
        <Tab tabId="13" component={TabEndButton}>
          Hard
        </Tab>
      </StyledTabs>
      <CardContainer>
        {recipes.map((recipe) => {
          return (
            <StyledCard key={recipe.name}>
              <ImageWrapper>
                <Image
                  alt={recipe.name}
                  src={recipe.imageSrc}
                  fill
                  objectFit="cover"
                />
              </ImageWrapper>
              <div>{recipe.name}</div>
              <div>{recipe.difficulty}</div>
            </StyledCard>
          );
        })}
      </CardContainer>
    </div>
  );
}
