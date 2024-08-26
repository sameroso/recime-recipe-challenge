"use client";
import { useState } from "react";
import { Recipe } from "@/dtos/Recipe";
import {
  CardContainer,
  StyledTabs,
  TabEndButton,
  TabMiddleButton,
  TabStartButton,
} from "./styles";
import { Skeleton, Tab } from "@/components";
import { AxiosInstance } from "@/libs/axios";
import { RecipeService } from "@/services";
import { RecipeCard } from "@/features/recipes";

export interface RecipesListProps {
  recipes: Recipe[] | undefined;
  recipeService: RecipeService;
  clientApi: AxiosInstance;
  status: "success" | "pending" | "error";
  refetch: () => void;
}

const recipesSortedByPosition = (recipes: Recipe[]) =>
  recipes?.sort((a, b) => {
    return a.position - b.position;
  });

export function RecipesList(props: RecipesListProps) {
  const [tabId, setTabId] = useState<Recipe["difficulty"] | "">("");

  const RecipesEqualToTabId =
    props.recipes?.filter((recipe) => {
      return recipe.difficulty === tabId;
    }) || [];

  const RecipesNotEqualToTabId =
    props.recipes?.filter((recipe) => {
      return recipe.difficulty !== tabId;
    }) || [];

  return (
    <div style={{ margin: "auto" }}>
      <StyledTabs
        value={tabId}
        onChangeTab={(tabId) => setTabId(tabId as Recipe["difficulty"])}
      >
        <Tab tabId="easy" component={TabStartButton}>
          Easy
        </Tab>
        <Tab tabId="medium" component={TabMiddleButton}>
          Medium
        </Tab>
        <Tab tabId="hard" component={TabEndButton}>
          Hard
        </Tab>
      </StyledTabs>
      {props.status === "pending" && (
        <Skeleton $boderRadius="5px" $height="200px" $width="300px" />
      )}
      {props.status === "error" && (
        <div onClick={() => props.refetch()}>deu ruim</div>
      )}
      {props.status === "success" && (
        <CardContainer duration={500}>
          {[
            ...recipesSortedByPosition(RecipesEqualToTabId),
            ...recipesSortedByPosition(RecipesNotEqualToTabId),
          ]?.map((recipe) => {
            return (
              <div key={recipe.id}>
                <RecipeCard
                  difficulty={recipe.difficulty}
                  imageSrc={recipe.imageSrc}
                  name={recipe.name}
                  key={recipe.id}
                  $active={tabId === recipe.difficulty}
                />
              </div>
            );
          })}
        </CardContainer>
      )}
    </div>
  );
}
