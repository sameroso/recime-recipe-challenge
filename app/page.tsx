import styles from "./page.module.css";
import { TrendingRecipes } from "@/templates/RecipeList";
import { recipeService } from "@/services";
import { headers } from "next/headers";

export default async function Home() {
  const headerList = headers();
  const protocol = headerList.get("x-forwarded-proto");
  const host = headerList.get("x-forwarded-host");

  const recipes = await recipeService.getRecipes({
    domain: `${protocol}://${host}`,
  });

  return (
    <main className={styles.main}>
      <TrendingRecipes recipes={recipes} />
    </main>
  );
}
