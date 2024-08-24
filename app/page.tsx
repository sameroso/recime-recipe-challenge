import { Recipes } from "@/templates";
import { recipeService } from "@/services";
import { Recipe } from "@/dtos/Recipe";
import type { AxiosError } from "@/libs/axios";
import { serverApi } from "@/libs/axios/serverApi";

const getRecipes = async () => {
  let error: AxiosError | undefined;
  let recipes: Recipe[] = [];
  try {
    const res = await recipeService.getRecipes(serverApi);
    recipes = res.data;
    error = undefined;
  } catch (e) {
    error = e as AxiosError;
    recipes = [];
  }
  return { error, recipes };
};

export default async function Home() {
  const res = await getRecipes();
  return (
    <main>
      <Recipes recipes={res.recipes} error={!!res.error} />
    </main>
  );
}
