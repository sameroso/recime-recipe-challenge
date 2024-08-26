"use server";

import { recipeService } from "@/services";
import { Recipe } from "@/dtos/Recipe";

export const getRecipes = async () => {
  let recipes: Recipe[] | undefined = [];
  try {
    const res = await recipeService.getRecipes();
    recipes = res.data;
  } catch (e) {
    recipes = undefined;
  }

  return recipes;
};
