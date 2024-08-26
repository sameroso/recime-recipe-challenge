"use client";

import { recipeService } from "@/services";
import { RecipesList, RecipesListProps } from "./RecipeList";
import { clientApi } from "@/libs/axios/clientApi";
import { useGetRecipes } from "../../hooks/useRecipes";

export function RecipesListTemplate(
  props: Omit<
    RecipesListProps,
    "clientApi" | "recipeService" | "status" | "refetch"
  >
) {
  const { data, status, refetch } = useGetRecipes({
    intialData: props.recipes,
  });
  return (
    <RecipesList
      refetch={refetch}
      status={status}
      recipes={data}
      recipeService={recipeService}
      clientApi={clientApi}
    />
  );
}
