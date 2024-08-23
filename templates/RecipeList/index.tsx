"use client";
import { useState } from "react";
import Image from "next/image";
import { Recipe } from "../../dtos/Recipe";
import { CardContainer } from "./styles";
import { Card, DefaultTabButtons, Tab, Tabs } from "@/components";

export function TrendingRecipes(props: { recipes: Recipe[] }) {
  const [tabId, setTabId] = useState("123");

  const { recipes = [] } = props;
  return (
    <div>
      <Tabs value={tabId} onChangeTab={(tabId) => setTabId(tabId as string)}>
        <Tab
          tabId="123"
          ButtonProps={{ children: "tab1" }}
          component={DefaultTabButtons.start}
        />
        <Tab
          tabId="234"
          ButtonProps={{ children: "tab2" }}
          component={DefaultTabButtons.middle}
        />
        <Tab
          tabId="13"
          ButtonProps={{ children: "tab5" }}
          component={DefaultTabButtons.end}
        />
      </Tabs>
      <CardContainer>
        {recipes.map((recipe) => {
          return (
            <Card key={recipe.name} style={{ width: "200px" }}>
              <div
                style={{
                  position: "relative",
                  height: "100px",
                  width: "100%",
                }}
              >
                <Image alt={recipe.name} src={recipe.imageSrc} fill />
              </div>
              <div>{recipe.name}</div>
              <div>{recipe.difficulty}</div>
            </Card>
          );
        })}
      </CardContainer>
    </div>
  );
}
