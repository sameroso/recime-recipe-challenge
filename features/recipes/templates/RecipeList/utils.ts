import { Recipe } from "@/dtos/Recipe";

export const sortRecipesByPosition = (recipes: Recipe[]) =>
  recipes?.sort((a, b) => {
    return a.position - b.position;
  });
