"use client";
import { useState } from "react";
import Image from "next/image";
import { Recipe } from "../../dtos/Recipe";
import { CardContainer, ImageWrapper, StyledTabs } from "./styles";
import { Card, DefaultTabButtons, Tab } from "@/components";

export function TrendingRecipes(props: { recipes: Recipe[] }) {
  const [tabId, setTabId] = useState("123");

  const { recipes = [] } = props;
  return (
    <div style={{ margin: "auto" }}>
      <StyledTabs
        value={tabId}
        onChangeTab={(tabId) => setTabId(tabId as string)}
      >
        <Tab tabId="123" component={DefaultTabButtons.middle}>
          tab1
        </Tab>
        <Tab tabId="234" component={DefaultTabButtons.middle}>
          tab2
        </Tab>
        <Tab tabId="13" component={DefaultTabButtons.end}>
          tab5
        </Tab>
      </StyledTabs>
      <CardContainer>
        {recipes.map((recipe) => {
          return (
            <Card key={recipe.name} style={{ width: "200px", height: "260px" }}>
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
            </Card>
          );
        })}
      </CardContainer>
    </div>
  );
}
