"use client";
import { useState } from "react";
import { Recipe } from "@/dtos/Recipe";
import { CardContainer } from "./styles";
import { SimpleError } from "@/components";
import { RecipeService } from "@/services";
import { RecipeCard, RecipeCardSkeleton } from "@/features/recipes";
import { sortRecipesByPosition } from "./utils";
import { DifficultyTabs } from "../../components/DifficultyTabs";

export interface RecipesListProps {
  recipes: Recipe[] | undefined;
  recipeService: RecipeService;
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
      <DifficultyTabs onChangeTab={setTabId} tabId={tabId} />
      {props.status === "pending" && (
        <CardContainer>
          <RecipeCardSkeleton repeatTimes={9} />
        </CardContainer>
      )}
      {props.status === "error" && (
        <div style={{ margin: "auto", width: "fit-content" }}>
          <SimpleError
            testIds={{
              buttonTestId: "reload_recipes_button",
              containerTestId: "error_loading_recipes",
            }}
            onReload={props.refetch}
          ></SimpleError>
        </div>
      )}
      {props.status === "success" && (
        <CardContainer duration={500}>
          {[
            ...sortRecipesByPosition(RecipesEqualToTabId),
            ...sortRecipesByPosition(RecipesNotEqualToTabId),
          ]?.map((recipe) => {
            return (
              <div data-testid={recipe.id} key={recipe.id}>
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
