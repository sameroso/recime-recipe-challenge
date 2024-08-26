import { useQuery, UseQueryResult } from "@/libs/react-query";
import { Recipe } from "@/dtos/Recipe";
import { queryKeys } from "../queryKeys";
import { recipeService } from "@/services";

interface useGetRecipesArgs {
  intialData?: Recipe[];
}

export type useGetRecipeResult = UseQueryResult<Recipe[], Error>;
export const useGetRecipes = (args: useGetRecipesArgs) => {
  const query = useQuery({
    queryKey: [queryKeys.getRecipes],
    queryFn: async () => {
      const res = await recipeService.getRecipes();
      return res.data;
    },
    refetchOnMount: false,
    initialData: args.intialData,
  });

  return query;
};
