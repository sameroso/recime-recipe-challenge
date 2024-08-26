"use server";

import { serverApi } from "@/libs/axios/serverApi";
import { recipeService } from "@/services";
import { Recipe } from "@/dtos/Recipe";

export const getRecipes = async () => {
  let recipes: Recipe[] | undefined = [];
  try {
    const res = await recipeService.getRecipes(serverApi);
    recipes = res.data;
  } catch (e) {
    recipes = undefined;
  }

  return recipes;
};
