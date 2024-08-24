"use client";

import { Recipe } from "../../dtos/Recipe";
import { AxiosError } from "@/libs/axios";
import { recipeService } from "@/services";
import { RecipesList } from "./RecipeList";
import { clientApi } from "@/libs/axios/clientApi";

export function Recipes(props: {
  recipes: Recipe[];
  error: boolean | undefined;
}) {
  return (
    <RecipesList
      error={props.error}
      recipes={props.recipes}
      recipeService={recipeService}
      clientApi={clientApi}
    />
  );
}
