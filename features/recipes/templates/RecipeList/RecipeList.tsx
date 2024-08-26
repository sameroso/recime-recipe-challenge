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
import { SimpleError, Tab } from "@/components";
import { AxiosInstance } from "@/libs/axios";
import { RecipeService } from "@/services";
import { RecipeCard, RecipeCardSkeleton } from "@/features/recipes";
import { sortRecipesByPosition } from "./utils";

export interface RecipesListProps {
  recipes: Recipe[] | undefined;
  recipeService: RecipeService;
  clientApi: AxiosInstance;
  status: "success" | "pending" | "error";
  refetch: () => void;
}

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
        <CardContainer>
          <RecipeCardSkeleton repeatTimes={9} />
        </CardContainer>
      )}
      {props.status === "error" && (
        <div style={{ margin: "auto", width: "fit-content" }}>
          <SimpleError onReload={props.refetch}></SimpleError>
        </div>
      )}
      {props.status === "success" && (
        <CardContainer duration={500}>
          {[
            ...sortRecipesByPosition(RecipesEqualToTabId),
            ...sortRecipesByPosition(RecipesNotEqualToTabId),
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
