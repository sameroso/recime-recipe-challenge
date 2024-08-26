import { Recipe } from "@/dtos/Recipe";
import { AxiosResponse } from "@/libs/axios";
import { recipeListMock } from "@/mocks";
import { RecipeService } from "@/services";

const getRecipesSuccess = async () => {
  return new Promise<AxiosResponse<Recipe[]>>((res, rej) => {
    return setTimeout(() => {
      return res({
        config: {} as AxiosResponse["config"],
        data: recipeListMock as Recipe[],
        headers: {},
        status: 200,
        statusText: "",
      });
    });
  });
};

const getRecipesError = async () => {
  return new Promise<AxiosResponse<Recipe[]>>((res, rej) => {
    return setTimeout(() => {
      return rej({
        config: {} as AxiosResponse["config"],
        data: undefined,
        headers: {},
        status: 200,
        statusText: "",
      });
    });
  });
};

export const recipeServicesSuccessMock: RecipeService = {
  getRecipes: getRecipesSuccess,
};

export const recipeServicesErrorMock: RecipeService = {
  getRecipes: getRecipesError,
};
