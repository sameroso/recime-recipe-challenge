import { Recipe } from "@/dtos/Recipe";

interface GetRecipesArgs {
  domain?: string;
}

const getRecipes = async (args?: GetRecipesArgs) => {
  const res = await fetch(`${args?.domain || ""}/api/recipes`);
  const recipes: Recipe[] = await res.json();
  return recipes;
};

const recipeService = { getRecipes };

export { recipeService };
