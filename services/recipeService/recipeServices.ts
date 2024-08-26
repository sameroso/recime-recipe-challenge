import { Recipe } from "@/dtos/Recipe";
import { AxiosResponse } from "@/libs/axios";
import { api } from "@/libs/axios/api";

type GetRecipes = () => Promise<AxiosResponse<Recipe[]>>;
export interface RecipeService {
  getRecipes: GetRecipes;
}
const getRecipes: GetRecipes = async () => {
  return api.get<Recipe[]>("/api/recipesa");
};

const recipeService: RecipeService = { getRecipes };

export { recipeService };
