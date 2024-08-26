import { Recipe } from "@/dtos/Recipe";
import { AxiosResponse, AxiosInstance } from "@/libs/axios";

type GetRecipes = (api: AxiosInstance) => Promise<AxiosResponse<Recipe[]>>;
export interface RecipeService {
  getRecipes: GetRecipes;
}
const getRecipes: GetRecipes = async (api) => {
  return api.get<Recipe[]>("/api/recipes");
};

const recipeService: RecipeService = { getRecipes };

export { recipeService };
