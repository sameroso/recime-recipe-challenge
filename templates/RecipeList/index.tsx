"use client";

import { recipeService } from "@/services";
import { RecipesList, RecipesListProps } from "./RecipeList";
import { clientApi } from "@/libs/axios/clientApi";

export function RecipesListTemplate(
  props: Omit<RecipesListProps, "clientApi" | "recipeService">
) {
  return (
    <RecipesList
      error={props.error}
      recipes={props.recipes}
      recipeService={recipeService}
      clientApi={clientApi}
    />
  );
}
