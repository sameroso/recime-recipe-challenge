import { getRecipes } from "@/features/recipes/actions";
import { RecipesListTemplate } from "@/features/recipes";

export default async function Home() {
  const res = await getRecipes();
  return (
    <main>
      <RecipesListTemplate recipes={res} />
    </main>
  );
}
